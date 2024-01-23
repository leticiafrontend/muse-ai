export type SongCardType = {
  details: {
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
}
