import { EVENTS } from '#constants'
import type { Schedules, Settings, TaskStore } from '#structures'
import Prisma from '@prisma/client'
import { Awaitable, UserError } from '@sapphire/framework'
import type { ApplicationCommandData, ApplicationCommandOption, ApplicationCommandOptionData, ApplicationCommandTypes, CommandInteraction, CommandInteractionOptionResolver } from 'discord.js'

declare module 'discord.js' {
	interface ClientEvents {
		[EVENTS.INTERACTION_DENIED]: [error: UserError, interaction: CommandInteraction<'cached'>]
		[EVENTS.INTERACTION_ERROR]: [error: Error, interaction: CommandInteraction<'cached'>]
		[EVENTS.INTERACTION_FINISH]: [interaction: CommandInteraction<'cached'>]
		[EVENTS.INTERACTION_RUN]: [interaction: CommandInteraction<'cached'>, options: Omit<CommandInteractionOptionResolver<'cached'>, 'getMessage' | 'getFocused'>]
		[EVENTS.INTERACTION_SUCCESS]: [interaction: CommandInteraction<'cached'>, result: Awaitable<unknown>]
		[EVENTS.UNKNOWN_INTERACTION]: [interaction: CommandInteraction<'cached'>]
	}
}

declare module '@sapphire/framework' {
	interface Command {
		defaultPermission?: boolean
		parameters?: ApplicationCommandOptionData[]
		type: ApplicationCommandTypes
		interact(interaction: CommandInteraction<'cached'>, options: Omit<CommandInteractionOptionResolver<'cached'>, 'getMessage' | 'getFocused'>): Awaitable<unknown>
		getCommandData(): ApplicationCommandData
	}
}

declare module '@sapphire/pieces' {
	interface Container {
		prisma: Prisma.PrismaClient
		schedules: Schedules
		settings: Settings
	}

	interface StoreRegistryEntries {
		tasks: TaskStore
	}
}