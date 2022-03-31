import { KContext } from "../config/config";

export default async function acceptFile(ctx:KContext) {
    const file = await ctx.getFile();
    const path  = await file.download();
    ctx.reply("Send me the start time and end time in format HH:MM:SS. Example: 01:00 to set start time 1 minute.");
    ctx.session.path = path;
    ctx.session.state = "ask_start";
}
