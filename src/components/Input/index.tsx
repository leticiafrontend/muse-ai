import Image from 'next/image'
import Link from 'next/link'
import { useState, ChangeEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { getSearchSong } from '@/core/requests'
import { SongType } from '@/types'
import { generateSlug } from '@/utils/generateSlug'

export const Input = () => {
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState<SongType[] | []>([])
  const [openSuggestions, setOpenSuggestions] = useState(false)

  const handleSelect = (title: string) => {
    setInputValue(title)
    setOpenSuggestions(false)
  }

  const searchSuggestions = useDebouncedCallback(async (value: string) => {
    try {
      const response = await getSearchSong(value)
      if (response.songs.length > 0) {
        setSuggestions(response.songs)
        setOpenSuggestions(true)
      }
    } catch {
      setSuggestions([])
      setOpenSuggestions(false)
    }
  }, 300)

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event

    setInputValue(value)

    if (value === '') {
      setOpenSuggestions(false)
      return setSuggestions([])
    }

    searchSuggestions(value)
  }

  return (
    <div className="relative w-full max-w-96">
      <div className="relative">
        <Image
          alt="Search"
          src="/assets/images/ic-search.svg"
          width="20"
          height="20"
          className="absolute left-2 top-2"
        />
      </div>

      <input
        type="text"
        className=" w-full rounded-lg bg-custom-darkGray p-2 pl-9 text-white outline-none placeholder:text-white focus:bg-custom-mediumGray"
        placeholder="Search in your library"
        value={inputValue}
        onChange={handleSearch}
      />

      {openSuggestions ? (
        <ul className="absolute z-50 mt-2 w-full rounded-lg bg-custom-darkGray p-4">
          {suggestions.map(({ song, id }) => (
            <li
              className="border-b border-custom-mediumDarkGray pb-4 pt-4 text-custom-lightGray first:pt-0 last:border-0 last:pb-0"
              key={id}
            >
              <Link
                href={`/song/${generateSlug(song.artist, song.title)}/${id}`}
                onClick={() => handleSelect(song.title)}
              >
                {song.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
