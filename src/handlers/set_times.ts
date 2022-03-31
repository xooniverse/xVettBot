import { KContext } from "../config/config";
import Duration from "../helpers/duration";

export default async function setTimeHandler(ctx:KContext) {
    if (ctx.session.state === "none") {
        ctx.reply("Please send me a file first");
        return;
    }

    const duration = Duration.fromString(ctx.msg.text);

    if (duration.valueOf() < 0) {
        ctx.reply("Duration must be positive");
        return;
    }

    if (ctx.session.state == "ask_start") {
        ctx.session.start = duration.valueOf();
        ctx.session.state = "ask_end";
        ctx.reply("Got it! Now, send me the end time!");
    } else if (ctx.session.state == "ask_end") {
        ctx.session.end = duration.valueOf();
        ctx.session.state = "none";
        ctx.reply("Perfect! So you want to trim the file from " + ctx.session.start + " to " + ctx.session.end + " seconds?", {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "Yes! Trim it! 🚀",
                        callback_data: "trim_yes"
                    }, {
                        text: "Change It! 🤔",
                        callback_data: "trim_no"
                    }]
                ],  
            }
        });
    }
}
