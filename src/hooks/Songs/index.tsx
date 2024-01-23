'use client'
import { createContext, useContext, useState } from 'react'

import { getAllSongs } from '@/core/requests'

import { SongType } from '@/types'

import { SongsContextData, SongsProviderProps } from './types'

const SongsContext = createContext({} as SongsContextData)

export const SongsProvider: React.FC<SongsProviderProps> = ({ children }) => {
  const [orderToggle, setOrderToggle] = useState(false)
  const [favoriteToggle, setFavoriteToggle] = useState(false)
  const [songs, setSongs] = useState<SongType[] | []>([])
  const [defaultSongs, setDefaultSongs] = useState<SongType[] | []>([])
  const [favorites, setFavorites] = useState<SongType[] | []>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getInitialSongs = async () => {
    setLoading(true)

    try {
      const response = await getAllSongs()

      setDefaultSongs(response.songs)
      setError(false)

      if (orderToggle) {
        const sortSongs = [...songs]
        sortSongs.sort((a, b) => a.song.title.localeCompare(b.song.title))
        return setSongs(sortSongs)
      }

      setSongs(response.songs)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const getFavoritesFromLocalStorage = (): SongType[] => {
    const favoritesString = localStorage.getItem('favorites')
    return favoritesString ? JSON.parse(favoritesString) : []
  }

  const updateFavoritesInLocalStorage = (favorites: SongType[]) => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  const getFavoriteSongs = () => {
    const favorites = getFavoritesFromLocalStorage()

    if (orderToggle) {
      const sortFavorites = [...favorites]
      sortFavorites.sort((a, b) => a.song.title.localeCompare(b.song.title))
      return setSongs(sortFavorites)
    }

    setFavorites(favorites)
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
    const updatedFavorites = getFavoritesFromLocalStorage()

    updatedFavorites.push(song)
    updateFavoritesInLocalStorage(updatedFavorites)
    setFavorites(updatedFavorites)
  }

  const removeFavoriteSong = (song: SongType) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== song.id,
    )
    updateFavoritesInLocalStorage(updatedFavorites)
    setFavorites(updatedFavorites)
  }

  const handleFavoriteClick = (song: SongType) => {
    const favorites = getFavoritesFromLocalStorage()

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
