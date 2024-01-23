import Image from 'next/image'
import React from 'react'

import { FavoriteButton } from '@/components/FavoriteButton'
import { ListSongs } from '@/components/ListSongs'
import { getSongById } from '@/core/requests'
import { getImage } from '@/utils/getImage'

const getSong = async (id: string) => {
  const response = await getSongById(id)

  return response
}

const getRelatedSongs = async (relatedIds) => {
  const relatedSongs = []

  for (const id of relatedIds) {
    const response = await getSongById(id)

    if (response) {
      relatedSongs.push(response)
    }
  }

  return relatedSongs
}

const Song = async ({ params }) => {
  const { song, related } = await getSong(params.id)
  const relatedSongs = await getRelatedSongs(related)

  const haveRelatedSongs = relatedSongs.length > 0

  return (
    <div className="min-h-screen bg-gradient-to-r from-custom-gradientFrom to-custom-gradientTo  text-white max-xl:px-4">
      <div className="relative mx-auto my-0 max-w-web">
        <Image
          alt={song.artist}
          src={getImage(song.files.poster)}
          width="400"
          height="400"
          className="absolute right-0 top-0 z-0 opacity-10"
        />
        <div className="flex gap-x-8 pb-16 pt-20 max-sm:flex-col max-sm:items-center">
          <div
            className={`h-48 w-48 rounded-md border border-custom-gray bg-cover bg-center max-sm:mb-8`}
            style={{
              backgroundImage: `url(${getImage(song.files.coverArt)})`,
            }}
          ></div>
          <div className="flex flex-col justify-center ">
            <div className="flex items-center gap-x-9  max-sm:flex-col max-sm:items-center max-sm:gap-8">
              <button className="rounded-full bg-white">
                <Image
                  width="60"
                  height="60"
                  src="/assets/images/ic-play.svg"
                  alt="play"
                />
              </button>
              <div>
                <div className="flex items-center gap-x-5 pb-3">
                  <h1 className="text-3xl font-semibold">{song.title}</h1>
                  <FavoriteButton song={song} />
                </div>
                <p>
                  {song.artist} <span className="px-2"></span>|
                  <span className="px-2"></span>
                  {song.album.title}
                  <span className="px-2"></span>|<span className="px-2"></span>
                  {song.album.year}
                </p>
              </div>
            </div>
            <p>Player</p>
          </div>
        </div>
        {haveRelatedSongs ? (
          <>
            <h1 className="py-6">Other albums</h1>
            <ListSongs songs={relatedSongs} related />
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Song
