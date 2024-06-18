import { Client, GatewayIntentBits } from "discord.js";
import { Bot } from "./structs/Bot";
import express from "express";

const app = express();
app.get("/", (_, res) => {
  res.send("Healthy");
});
app.listen(3000);

export const bot = new Bot(
  new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.DirectMessages
    ]
  })
);
