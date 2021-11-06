import { RiftClient } from '#structures'

const client = new RiftClient()

try {
	await client.start()
} catch (error) {
	console.error(error)
	process.exit(0)	
}