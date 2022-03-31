import * as dotenv from 'dotenv';
dotenv.config({
    path: `${__dirname}/../.env`
})
import bot from "./config/config";
import startHandler from "./handlers/start";
import preCheck from './helpers/pre_check';

bot.command("start", startHandler);
bot.on([":video", ":audio", ":document"], preCheck);

bot.start();
console.log("Bot started");