import type { Client, Message, PartialMessage } from 'discord.js';
import type { CommandHandler } from 'djs-commander';

export type SlashCommandProps = {
    interaction: Message<boolean> | PartialMessage,
    client: Client<boolean>,
    handler: CommandHandler,
};
