'use client'
import { createContext, useContext, useState } from 'react'

import { getAllSongs } from '@/core/requests'

import { SongsContextData, SongsProviderProps } from './types'

const SongsContext = createContext({} as SongsContextData)

export const SongsProvider: React.FC<SongsProviderProps> = ({ children }) => {
  const [orderToggle, setOrderToggle] = useState(false)
  const [songs, setSongs] = useState([])
  const [defaultSongs, setDefaultSongs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getInitialSongs = async () => {
    setLoading(true)

    try {
      const response = await getAllSongs()
      setSongs(response.songs)
      setDefaultSongs(response.songs)
      setError(false)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleOrderToggle = () => {
    setOrderToggle((prev) => !prev)

    if (!orderToggle) {
      const sortSongs = [...songs]
      sortSongs.sort((a, b) => a.song.title.localeCompare(b.song.title))
      return setSongs(sortSongs)
    }

    setSongs(defaultSongs)
  }

  return (
    <SongsContext.Provider
      value={{
        songs,
        getInitialSongs,
        loading,
        error,
        orderToggle,
        handleOrderToggle,
      }}
    >
      {children}
    </SongsContext.Provider>
  )
}

export const useSongs = () => {
  const context = useContext(SongsContext)

  if (context === undefined) {
    throw new Error('SongsContext must be used within a SongsProvider"')
  }

  return context
}
