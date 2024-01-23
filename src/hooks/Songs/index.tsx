'use client'
import { createContext, useContext, useState } from 'react'

import { getAllSongs } from '@/core/requests'

import { SongType } from '@/types'

import { SongsContextData, SongsProviderProps } from './types'

const SongsContext = createContext({} as SongsContextData)

export const SongsProvider: React.FC<SongsProviderProps> = ({ children }) => {
  const [orderToggle, setOrderToggle] = useState(false)
  const [favoriteToggle, setFavoriteToggle] = useState(false)
  const [songs, setSongs] = useState([])
  const [defaultSongs, setDefaultSongs] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
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

    if (favoriteToggle) {
      return setSongs(favorites)
    }

    setSongs(defaultSongs)
  }

  const saveFavoriteSong = (song: SongType) => {
    const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || []

    updatedFavorites.push(song)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  const removeFavoriteSong = (song: SongType) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== song.id,
    )
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  const getFavoriteSongs = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []

    setFavorites(favorites)
  }

  const handleFavoriteClick = (song: SongType) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []

    const isFavorite = favorites.some((favorite) => favorite.id === song.id)

    if (isFavorite) {
      return removeFavoriteSong(song)
    }

    saveFavoriteSong(song)
  }

  const handleFavoriteToggle = () => {
    setFavoriteToggle((prev) => !prev)
    setOrderToggle(false)

    if (!favoriteToggle) {
      return setSongs(favorites)
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
        getFavoriteSongs,
        handleFavoriteClick,
        favorites,
        favoriteToggle,
        handleFavoriteToggle,
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
