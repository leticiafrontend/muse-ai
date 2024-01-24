import { SongType } from '@/types'

import data from '../../data.json'

export const GET = async (
  _: Request,
  { params }: { params: { id: string } },
) => {
  const artistId = Number(params.id)
  const artist = data?.songs?.find((artist: SongType) => artist.id == artistId)

  return Response.json(artist, { status: 200 })
}
