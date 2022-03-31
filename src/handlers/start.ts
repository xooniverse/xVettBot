import { Context } from "grammy";

export default async function startHandler(ctx: Context) {
    ctx.reply(
        "Hello, I'm Vett Bot!\n\nI can help you" +
        " trim audio or video files. Send me a file and I'll trim it for you."
    );
}