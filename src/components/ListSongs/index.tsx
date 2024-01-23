'use client'
import React from 'react'

import { SongCard } from '../SongCard'

import { ListSongsType } from './types'

export const ListSongs = ({ songs, related = false }: ListSongsType) => {
  const totalSongs = songs.length
  const isRelated = related

  return (
    <div className="flex flex-wrap gap-8 pb-20 max-xl:px-4 max-sm:justify-center">
      {totalSongs > 0 ? (
        songs.map((song) => (
          <SongCard details={song} key={song.id} favorite={!isRelated} />
        ))
      ) : (
        <h1 className="pt-2 text-xl font-semibold text-white">
          No songs found
        </h1>
      )}
    </div>
  )
}
