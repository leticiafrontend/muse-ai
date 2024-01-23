import { ReactNode } from 'react'

import { SongType } from '@/types'
export type SongsContextData = {
  songs: SongType[]
  getInitialSongs: () => void
  loading: boolean
  error: boolean
  orderToggle: boolean
  handleOrderToggle: () => void
  getFavoriteSongs: () => void
  handleFavoriteClick: () => void
  favorites: number[]
  favoriteToggle: boolean
  handleFavoriteToggle: () => void
}

export type SongsProviderProps = {
  children: ReactNode
}
