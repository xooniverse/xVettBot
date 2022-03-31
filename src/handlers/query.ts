import { InlineKeyboard } from "grammy";
import { KContext } from "../config/config";
import { YesNo } from "../types/types";
import trimIt from "./trim";

export default class QueryHandler {
    static async handleQuery(ctx: KContext) {
        const [key, value] = ctx.callbackQuery.data.split("_");
        if (key === "trim") return QueryHandler.trimHandler(ctx, value as YesNo);
    }

    static async trimHandler(ctx: KContext, value: YesNo) {
        if (value == "no") {
            ctx.answerCallbackQuery("Gotcha! ☀️");
            ctx.session.state = "ask_start";
            ctx.reply("Okay, let's change the trim timings. Send me the start time!");
            return;
        }
        ctx.editMessageText("Trimming video...", {
            reply_markup: new InlineKeyboard().text("Trimming ⏳", "ignore")
        });
        return trimIt(ctx);
    }
}