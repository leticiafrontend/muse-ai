export type SongsResponseType = {
  songs: Array<{
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
    related: number[]
  }>
}

export type SongByIdResponseType = {
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
  related: number[]
}
