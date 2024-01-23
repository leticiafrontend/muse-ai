import { api } from '../api'

import { SongByIdResponseType, SongsResponseType } from './type'

export const getAllSongs = async () => {
  const response = await api('/songs')

  const songs: Promise<SongsResponseType> = response.json()

  return songs
}

export const getSongById = async (id: string) => {
  const response = await api(`/song/${id}`)
  const song: Promise<SongByIdResponseType> = response.json()

  return song
}

export const getSearchSong = async (search: string) => {
  const response = await api(`/search?title=${search}`)
  const songs: Promise<SongsResponseType> = response.json()

  return songs
}
