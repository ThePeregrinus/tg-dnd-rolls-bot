import { Bot } from "grammy";
import 'dotenv/config';

import { start } from "./commands/start.js";
import { init_menu } from "./menu/index.js";
import { menu_handler } from "./commands/dice/index.js";
import { roll } from "./commands/roll.js";

try {
const token = process.env.TG_TOKEN;

const bot = new Bot(token);

bot.command("start",  start);
bot.command("help", start );
bot.command("roll", roll)

init_menu(bot);
menu_handler(bot);

bot.start();
}
catch (error) {
    console.error(error)
}