"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
async function preCheck(ctx, next) {
    const file = ctx.message.document || ctx.message.audio || ctx.message.video;
    // file size limit
    if (ctx.message.document && ctx.message.document.file_size > config_1.MAX_FILE_SIZE) {
        return ctx.reply("Sorry, your file is too big. Max file size is 100 MB.");
    }
    if (file) {
        const fileType = ctx.message.document.mime_type;
        if (config_1.supportedFileTypes.includes(fileType)) {
            return next();
        }
    }
    ctx.reply("I can only trim audio or video or document files. Send me a file and I'll trim it for you.");
}
exports.default = preCheck;
//# sourceMappingURL=pre_check.js.map