import { Context } from "grammy";

export default function helpHandler(ctx: Context) {
    ctx.reply(helpMessage, {
        parse_mode: "HTML",
    });
}

const helpMessage = "<b>Help 👽</b>\nI'm a bot that can help you trim your video or audio files.\n\n" +
    "To start, type /start. And send me a video or audio file right away. " +
    "You can set the start and end time of your file by sending me a message in the format: " +
    "HH:MM:SS and confirm your selection when I prompt you.\n\n" +

    "And that's it! I'll send you the trimmed file.\n\n" + 

    "Oh wait, if the trimmed file is huge than 50 MB, I won't be able to send it you. This is a Telegram limitation. \n\n" +

    "<b>About 🛰</b>\n" +
    "This bot was created by @Xooniverse team, and is open source. You can find the source code on <a href='https://github.com/xooniverse/xvettbot'>Github</a>.";