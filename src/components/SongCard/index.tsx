import Link from 'next/link'

import { generateSlug } from '@/utils/generateSlug'
import { getImage } from '@/utils/getImage'

import { FavoriteButton } from '../FavoriteButton'

import { SongCardType } from './types'

export const SongCard = ({ details, favorite = true }: SongCardType) => {
  const { song, id } = details

  return (
    <div className="relative h-80 w-52 rounded-lg bg-custom-darkGray">
      <Link href={`/song/${generateSlug(song.artist, song.title)}/${id}`}>
        <div
          className="h-52 w-52 rounded-t-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${getImage(song.files.coverArt)})` }}
        ></div>
        <div className="flex justify-between p-4">
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-semibold text-white">{song.title}</h1>
            <p className="text-custom-gray">{song.artist}</p>
          </div>
        </div>
      </Link>
      {favorite ? (
        <div className="absolute bottom-2 right-4 self-end pb-2">
          <FavoriteButton song={details} />
        </div>
      ) : null}
    </div>
  )
}
