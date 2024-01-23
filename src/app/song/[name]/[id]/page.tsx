import Image from 'next/image'
import React from 'react'

import { FavoriteButton } from '@/components/FavoriteButton'
import { SongCard } from '@/components/SongCard'
import { getImage } from '@/utils/getImage'

const Song = async () => {
  const song = {
    id: 848,
    song: {
      album: {
        title: 'Abbey Road',
        year: 1998,
      },
      artist: 'The Beatles',
      title: 'Let It Be',
      files: {
        coverArt: 'beatles-cover.jpeg',
        poster: 'beatles-poster.png',
        audio: 'song-1.mp3',
      },
    },
    related: [77649302, 11428620, 9226019, 6072496],
  }

  const related = [
    {
      id: 848,
      song: {
        album: {
          title: 'Abbey Road',
          year: 1998,
        },
        artist: 'The Beatles',
        title: 'Let It Be',
        files: {
          coverArt: 'beatles-cover.jpeg',
          poster: 'beatles-poster.png',
          audio: 'song-1.mp3',
        },
      },
      related: [77649302, 11428620, 9226019, 6072496],
    },
    {
      id: 848,
      song: {
        album: {
          title: 'Abbey Road',
          year: 1998,
        },
        artist: 'The Beatles',
        title: 'Let It Be',
        files: {
          coverArt: 'beatles-cover.jpeg',
          poster: 'beatles-poster.png',
          audio: 'song-1.mp3',
        },
      },
      related: [77649302, 11428620, 9226019, 6072496],
    },
    {
      id: 848,
      song: {
        album: {
          title: 'Abbey Road',
          year: 1998,
        },
        artist: 'The Beatles',
        title: 'Let It Be',
        files: {
          coverArt: 'beatles-cover.jpeg',
          poster: 'beatles-poster.png',
          audio: 'song-1.mp3',
        },
      },
      related: [77649302, 11428620, 9226019, 6072496],
    },
    {
      id: 848,
      song: {
        album: {
          title: 'Abbey Road',
          year: 1998,
        },
        artist: 'The Beatles',
        title: 'Let It Be',
        files: {
          coverArt: 'beatles-cover.jpeg',
          poster: 'beatles-poster.png',
          audio: 'song-1.mp3',
        },
      },
      related: [77649302, 11428620, 9226019, 6072496],
    },
    {
      id: 848,
      song: {
        album: {
          title: 'Abbey Road',
          year: 1998,
        },
        artist: 'The Beatles',
        title: 'Let It Be',
        files: {
          coverArt: 'beatles-cover.jpeg',
          poster: 'beatles-poster.png',
          audio: 'song-1.mp3',
        },
      },
      related: [77649302, 11428620, 9226019, 6072496],
    },
    {
      id: 848,
      song: {
        album: {
          title: 'Abbey Road',
          year: 1998,
        },
        artist: 'The Beatles',
        title: 'Let It Be',
        files: {
          coverArt: 'beatles-cover.jpeg',
          poster: 'beatles-poster.png',
          audio: 'song-1.mp3',
        },
      },
      related: [77649302, 11428620, 9226019, 6072496],
    },
    {
      id: 848,
      song: {
        album: {
          title: 'Abbey Road',
          year: 1998,
        },
        artist: 'The Beatles',
        title: 'Let It Be',
        files: {
          coverArt: 'beatles-cover.jpeg',
          poster: 'beatles-poster.png',
          audio: 'song-1.mp3',
        },
      },
      related: [77649302, 11428620, 9226019, 6072496],
    },
  ]

  const haveRelatedSongs = song.related.length > 0

  return (
    <div className="bg-gradient-to-r from-custom-gradientFrom to-custom-gradientTo  text-white max-xl:px-4">
      <div className="relative mx-auto my-0 max-w-web">
        <Image
          alt={song.song.artist}
          src={getImage(song.song.files.poster)}
          width="400"
          height="400"
          className="absolute right-0 top-0 z-0 opacity-10"
        />
        <div className="flex gap-x-8 pb-16 pt-20 max-sm:flex-col max-sm:items-center">
          <div
            className={`h-48 w-48 rounded-md border border-custom-gray bg-cover bg-center max-sm:mb-8`}
            style={{
              backgroundImage: `url(${getImage(song.song.files.coverArt)})`,
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
                  <h1 className="text-3xl font-semibold">These days</h1>
                  <FavoriteButton />
                </div>
                <p>Foo Fighters | Wasting Light | 1998</p>
              </div>
            </div>
            <p>Player</p>
          </div>
        </div>
        {haveRelatedSongs ? (
          <>
            <h1 className="py-6">Other albums</h1>
            <div className="flex flex-wrap justify-between gap-8 pb-20 max-sm:justify-center">
              {related.map((song) => (
                <SongCard key={song.id} details={song} favorite={false} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Song
