import fs from 'fs'

import { SongType } from '@/types'
const payload = JSON.parse(
  fs.readFileSync('./server-payload.json', { encoding: 'utf8' }),
)

export const GET = async () => {
  const songs = payload?.songs.map((i: SongType) => ({
    id: i.id,
    song: i.song,
  }))

  return Response.json({ songs }, { status: 200 })
}
