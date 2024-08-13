import { Client, GatewayIntentBits } from 'discord.js';
import { CommandHandler } from 'djs-commander';
import 'dotenv/config';
import config from '@config/index';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

new CommandHandler({
    client,
    ...config,
});

client.login(process.env.TOKEN);
