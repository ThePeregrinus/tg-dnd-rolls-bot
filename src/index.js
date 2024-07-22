import { Bot } from "grammy";
import 'dotenv/config';

import { init_menu } from "./menu/index.js";
import { menu_handler } from "./commands/dice/index.js";

const token = process.env.TG_TOKEN;

const bot = new Bot(token);

init_menu(bot)
menu_handler(bot)

bot.start();