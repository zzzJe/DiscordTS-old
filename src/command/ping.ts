import { SlashCommandBuilder } from 'discord.js';
import type { SlashCommandProps } from '@type/props';

export const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong!');

export const run = async ({ interaction, client, handler }: SlashCommandProps) => {
    await interaction.reply(`Pong! ${client.ws.ping}ms`);
    await interaction.channel.send('Keep ping-pong with /ping command!');
};
