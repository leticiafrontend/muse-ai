import { ReactNode } from 'react'

export type SongsContextData = {
  songs: SongType[]
  getInitialSongs: () => void
  loading: boolean
  error: boolean
}

export type SongsProviderProps = {
  children: ReactNode
}

export type SongType = {
  id: number
  song: {
    album: {
      title: string
      year: number
    }
    artist: string
    title: string
    files: {
      coverArt: string
      poster: string
      audio: string
    }
  }
}
