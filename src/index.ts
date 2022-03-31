import * as dotenv from 'dotenv';
dotenv.config({
    path: `${__dirname}/../.env`
})
import bot, { timeRegex } from "./config/config";
import QueryHandler from './handlers/query';
import setTimeHandler from './handlers/set_times';
import startHandler from "./handlers/start";
import acceptFile from './handlers/accept_file';
import preCheck from './helpers/pre_check';
import helpHandler from './handlers/help';

bot.command("start", startHandler);
bot.on([":video", ":audio", ":document", ":voice"], preCheck, acceptFile);
bot.hears(timeRegex, setTimeHandler);
bot.on("callback_query:data", QueryHandler.handleQuery);
bot.command("help", helpHandler);

bot.catch((err) => {
    console.error(err);
    err.ctx.reply("Something went wrong. Please try again later.");
});

bot.start();
console.log("Bot started");