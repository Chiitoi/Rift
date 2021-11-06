import type { CommandJSON, CommandOptions } from '@sapphire/framework'
import type { ApplicationCommandOptionData, ApplicationCommandType } from 'discord.js'

export type RiftCommandOptions = Pick<CommandOptions, 'description' | 'enabled' | 'name'> & {
    defaultPermission?: boolean
    parameters?: ApplicationCommandOption[]
    type: ApplicationCommandType
}

export interface ScheduledTask {
    cron: Cron
    name: string
    data: Record<string, unknown>
    paused: boolean
    running: boolean
    time: Date
}