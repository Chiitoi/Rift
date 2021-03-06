import { ApplyOptions } from '@sapphire/decorators'
import { Listener, type ListenerOptions } from '@sapphire/framework'
import { Constants, type Guild } from 'discord.js'

@ApplyOptions<ListenerOptions>({ event: Constants.Events.GUILD_CREATE })
export class RiftListener extends Listener {
    public async run(guild: Guild) {
        await this.container.settings.create(BigInt(guild.id))
    }
}