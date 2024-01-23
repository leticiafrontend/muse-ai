import fs from 'fs'
const payload = JSON.parse(
  fs.readFileSync('./server-payload.json', { encoding: 'utf8' }),
)

export const GET = async (
  _: Request,
  { params }: { params: { id: string } },
) => {
  const artistId = params.id
  const artist = payload?.songs?.find((artist) => artist.id == artistId)

  return Response.json(artist, { status: 200 })
}
