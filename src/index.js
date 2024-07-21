import { Bot } from "grammy";
import 'dotenv/config';
const token = process.env.TG_TOKEN;

const bot = new Bot(token);

bot.on("message", (ctx) => ctx.reply('Hello, world!'));

bot.start();