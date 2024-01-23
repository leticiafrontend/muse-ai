'use client'
import { Howl } from 'howler'
import Image from 'next/image'
import React, { useState, useEffect, ChangeEvent } from 'react'

import { calculateTimeDifference } from '@/utils/calculateTimeDifference'
import { formatTime } from '@/utils/formatTime'

import { FavoriteButton } from '../FavoriteButton'

import { PlayerType } from './types'

const Player = ({ audioSrc, songDetails }: PlayerType) => {
  const [isPlaying, setPlaying] = useState(false)
  const [audio, setAudio] = useState(new Howl({ src: [audioSrc] }))
  const [progress, setProgress] = useState(0)
  const { song, id } = songDetails

  useEffect(() => {
    setAudio(
      new Howl({
        src: [audioSrc],
        onplay: () => {
          setPlaying(true)
        },
        onpause: () => {
          setPlaying(false)
        },
        onend: () => {
          setPlaying(false)
          setProgress(0)
        },
        onseek: () => {
          setProgress((audio.seek() / audio.duration()) * 100)
        },
      }),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioSrc])

  useEffect(() => {
    return () => {
      if (isPlaying) {
        audio.unload()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying])

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }

    setPlaying(!isPlaying)
  }

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const seekTo = audio.duration() * (Number(e.target.value) / 100)
    audio.seek(seekTo)
    setProgress(Number(e.target.value))
  }

  const updateProgress = () => {
    if (isPlaying) {
      setProgress((audio.seek() / audio.duration()) * 100)
      requestAnimationFrame(updateProgress)
    }
  }

  useEffect(() => {
    if (isPlaying) {
      requestAnimationFrame(updateProgress)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying])

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex items-center gap-x-9  max-sm:flex-col max-sm:items-center max-sm:gap-8">
        <button onClick={togglePlay} className="rounded-full bg-white">
          <Image
            width="60"
            height="60"
            src={`/assets/images/ic-${isPlaying ? 'pause' : 'play'}.svg`}
            alt="play"
          />
        </button>
        <div>
          <div className="flex items-center gap-x-5 pb-3">
            <h1 className="text-3xl font-semibold">{song.title}</h1>
            <FavoriteButton song={{ id, song }} />
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
      <div className="flex w-full flex-col px-2 pt-10">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={progress}
          onChange={handleSeek}
          className="h-0.5 appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-track]:h-2 [&::-moz-range-track]:w-full
          [&::-moz-range-track]:rounded-full [&::-ms-thumb]:appearance-none
          [&::-ms-thumb]:bg-white [&::-webkit-slider-runnable-track]:rounded-full
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
        />
        <div className="flex justify-between pt-4">
          <p className="text-custom-darkLightGray">
            {formatTime(audio.seek())}
          </p>
          <p className="text-custom-darkLightGray">
            -
            {calculateTimeDifference(
              formatTime(audio.seek()),
              formatTime(audio.duration()),
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Player
