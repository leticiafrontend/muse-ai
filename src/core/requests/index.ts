import { api } from '../api'

import { SongByIdResponseType, SongsResponseType } from './type'

export const getAllSongs = async () => {
  const response = await api('/songs')
  const songs: SongsResponseType = response.json()

  return songs
}

export const getSongById = async (id: string) => {
  const response = await api(`/song/${id}`)
  const song: SongByIdResponseType = response.json()

  return song
}
