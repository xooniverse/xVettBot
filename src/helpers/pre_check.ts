import { NextFunction } from "grammy";
import { KContext, MAX_FILE_SIZE, supportedFileTypes } from "../config/config";

export default async function preCheck(ctx: KContext, next: NextFunction) {
    const file = ctx.message.document || ctx.message.audio || ctx.message.video;

    // file size limit
    if (ctx.message.document && ctx.message.document.file_size > MAX_FILE_SIZE) {
        return ctx.reply("Sorry, your file is too big. Max file size is 100 MB.");
    }


    if (file) {
        const fileType = ctx.message.document.mime_type;
        if (supportedFileTypes.includes(fileType)) {
            return next();
        }
    }


    ctx.reply("I can only trim audio or video or document files. Send me a file and I'll trim it for you.");
}