import { NextRequest } from 'next/server'

import { SongType } from '@/types'

import data from '../data.json'

export const GET = async (request: NextRequest) => {
  const title = request.nextUrl.searchParams.get('title') || ''
  const titleQuery = title.toLowerCase().replaceAll('-', ' ')
  const songs = data?.songs.filter((song: SongType) =>
    song.song.title.toLowerCase().includes(titleQuery),
  )

  return Response.json({ songs }, { status: 200 })
}
