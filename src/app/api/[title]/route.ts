import { NextRequest } from 'next/server'

import fs from 'fs'

import { SongType } from '@/types'
const payload = JSON.parse(
  fs.readFileSync('./server-payload.json', { encoding: 'utf8' }),
)

export const GET = async (request: NextRequest) => {
  const title = request.nextUrl.searchParams.get('title') || ''
  const titleQuery = title.toLowerCase().replaceAll('-', ' ')
  const songs = payload?.songs.filter((song: SongType) =>
    song.song.title.toLowerCase().includes(titleQuery),
  )

  return Response.json({ songs }, { status: 200 })
}
