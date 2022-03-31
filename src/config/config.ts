import { Bot, Context, session, SessionFlavor } from "grammy";
import { FileFlavor, hydrateFiles } from "@grammyjs/files"
import KSession from "../types/session";


type KContext = FileFlavor<Context> & SessionFlavor<KSession>;

const bot = new Bot<KContext>(process.env.TOKEN);

bot.api.config.use(hydrateFiles(bot.token));
bot.use(session({ initial }));

function initial(): KSession {
    return { state: "none" };
}

// Time format HH:MM:SS
// and the HH is optional that is 00:00 is the same as 00:00:00
const timeRegex = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;

const supportedFileTypes = [
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "audio/x-m4a",
    "audio/x-wav",
    "video/mp4",
    "video/ogg",
    "video/webm"
];

/** Max File Size is 100 MB */
const MAX_FILE_SIZE = 100 * 1024 * 1024;

export default bot;
export { supportedFileTypes, MAX_FILE_SIZE, KContext, timeRegex };