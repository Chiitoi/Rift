import { TOKEN } from '#config'
import { Schedules, Settings, TaskStore } from '#structures'
import Prisma from '@prisma/client'
import { container, SapphireClient } from '@sapphire/framework'
import { Intents, Options } from 'discord.js'


export class RiftClient extends SapphireClient {
	public constructor() {
		super({
			allowedMentions: {
				parse: ['users'],
				repliedUser: false
			},
			intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MESSAGES
			],
			loadDefaultErrorListeners: false,
            makeCache: Options.cacheWithLimits({
                BaseGuildEmojiManager: 0,
                GuildBanManager: 0,
                GuildInviteManager: 0,
                GuildStickerManager: 0,
                MessageManager: 5,
                PresenceManager: 0,
                ReactionManager: 0,
                ReactionUserManager: 0,
                StageInstanceManager: 0,
                ThreadManager: 0,
                ThreadMemberManager: 0,
                VoiceStateManager: 0
            })
		})	
	}

    public async setup() {
		container.prisma = new Prisma.PrismaClient()
		container.schedules = new Schedules()
		container.settings = new Settings()
		container.stores.register(new TaskStore())
    }

	public async start() {
		await this.setup()
		await super.login(TOKEN)
	}
}