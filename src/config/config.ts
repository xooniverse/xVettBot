import { Bot, Context } from "grammy";
import { FileFlavor, hydrateFiles } from "@grammyjs/files"


type KContext = FileFlavor<Context>;

const bot = new Bot<KContext>(process.env.TOKEN);
bot.api.config.use(hydrateFiles(bot.token));

const supportedFileTypes = [
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "video/mp4",
    "video/webm"
];

/** Max File Size is 100 MB */
const MAX_FILE_SIZE = 100 * 1024 * 1024;

export default bot;
export { supportedFileTypes, MAX_FILE_SIZE, KContext };