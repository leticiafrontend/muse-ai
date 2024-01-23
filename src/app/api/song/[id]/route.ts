import fs from 'fs'

import { SongType } from '@/types'
const payload = JSON.parse(
  fs.readFileSync('./server-payload.json', { encoding: 'utf8' }),
)

export const GET = async (
  _: Request,
  { params }: { params: { id: string } },
) => {
  const artistId = Number(params.id)
  const artist = payload?.songs?.find(
    (artist: SongType) => artist.id == artistId,
  )

  return Response.json(artist, { status: 200 })
}
