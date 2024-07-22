import { Bot } from "grammy";
import 'dotenv/config';

import { init_menu } from "./menu/index.js";

const token = process.env.TG_TOKEN;

const bot = new Bot(token);

init_menu(bot)


bot.start();