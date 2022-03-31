import { KContext } from "../config/config";
import ff from "@ffmpeg-installer/ffmpeg";
import Ffmpeg from "fluent-ffmpeg";
import { InlineKeyboard, InputFile } from "grammy";
import * as fs from "fs";
import extensionFromMimeType from "../helpers/file_type";

export default async function trimIt(ctx: KContext) {
    const ffPath = ff.path;
    const { start, end, path } = ctx.session;

    Ffmpeg.setFfmpegPath(ffPath);

    const extension = extensionFromMimeType(ctx.session.type);
    const outFile = `${ctx.callbackQuery.from.id}_${ctx.callbackQuery.id}.${extension}`;

    ctx.answerCallbackQuery("Trimming...");

    Ffmpeg(path)
        .setStartTime(start)
        .setDuration(end - start)
        .output(outFile)
        .on('end', async function (err) {
            if (err) {
                ctx.reply("Something went wrong. Try again later.");
                console.log(err);
                return;
            }
            await ctx.editMessageText(`Trimmed! Sending...`);
            await ctx.replyWithDocument(new InputFile(outFile));

            deleteFiles(path, outFile);
        })
        .on('error', function (err) {
            console.log('error: ', err)
            ctx.answerCallbackQuery("Something went wrong. Try again later!");
            ctx.editMessageText("Something went wrong. Try again later!", {
                reply_markup: new InlineKeyboard().text("Failed 🙁", "ignore")
            });
            deleteFiles(path, path + "converted");
        }).run()

    ctx.session = { state: "none" }
}

function deleteFiles(path: string, converted: string) {
    fs.unlink(path, () => {
        // ignore
    });
    fs.unlink(converted, () => {
        // ignore
    });
    console.log("Files deleted");
}