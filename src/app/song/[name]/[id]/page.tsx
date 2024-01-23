import Image from 'next/image'
import React from 'react'

import { ListSongs } from '@/components/ListSongs'
import Player from '@/components/Player'
import { getSongById } from '@/core/requests'
import { getAudio } from '@/utils/getAudio'
import { getImage } from '@/utils/getImage'

const getSong = async (id: string) => {
  const response = await getSongById(id)

  return response
}

const getRelatedSongs = async (relatedIds) => {
  const relatedSongs = []
  if (relatedIds) {
    for (const id of relatedIds) {
      const response = await getSongById(id)

      if (response) {
        relatedSongs.push(response)
      }
    }
  }
  return relatedSongs
}

const Song = async ({ params }) => {
  const { song, related, id } = await getSong(params.id)
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

          <Player
            audioSrc={getAudio(song.files.audio)}
            songDetails={{ id, song }}
          />
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
