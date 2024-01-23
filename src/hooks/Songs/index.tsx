'use client'
import { createContext, useContext, useState } from 'react'

import { getAllSongs } from '@/core/requests'

import { SongsContextData, SongsProviderProps } from './types'

const SongsContext = createContext({} as SongsContextData)

export const SongsProvider: React.FC<SongsProviderProps> = ({ children }) => {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getInitialSongs = async () => {
    setLoading(true)

    try {
      const response = await getAllSongs()
      setSongs(response.songs)
      setError(false)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SongsContext.Provider
      value={{
        songs,
        getInitialSongs,
        loading,
        error,
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
