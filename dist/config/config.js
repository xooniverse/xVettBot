"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_FILE_SIZE = exports.supportedFileTypes = void 0;
const grammy_1 = require("grammy");
const files_1 = require("@grammyjs/files");
const bot = new grammy_1.Bot(process.env.TOKEN);
bot.api.config.use((0, files_1.hydrateFiles)(bot.token));
const supportedFileTypes = [
    "audio/mpeg",
    "audio/ogg",
    "audio/wav",
    "video/mp4",
    "video/webm"
];
exports.supportedFileTypes = supportedFileTypes;
/** Max File Size is 100 MB */
const MAX_FILE_SIZE = 100 * 1024 * 1024;
exports.MAX_FILE_SIZE = MAX_FILE_SIZE;
exports.default = bot;
//# sourceMappingURL=config.js.map