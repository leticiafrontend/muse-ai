import { SongType } from '@/types'

import data from '../data.json'

export const GET = async () => {
  const songs = data?.songs.map((i: SongType) => ({
    id: i.id,
    song: i.song,
  }))

  return Response.json({ songs }, { status: 200 })
}
