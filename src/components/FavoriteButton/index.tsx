'use client'
import Image from 'next/image'

import { useSongs } from '@/hooks/Songs'
import { SongType } from '@/types'

export const FavoriteButton = ({ song }: { song: SongType }) => {
  const { handleFavoriteClick, favorites } = useSongs()
  console.log(song)

  const favoritesLocalString: string | null = localStorage.getItem('favorites')
  const favoritesLocal: SongType[] | [] = favoritesLocalString
    ? JSON.parse(favoritesLocalString)
    : []

  const isSelected =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    favorites.some((favorite: SongType) => favorite.id === song.id) ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    favoritesLocal?.some((favorite: SongType) => favorite.id === song.id)

  const handleFavoriteToggle = () => {
    handleFavoriteClick(song)
  }

  return (
    <div className="z-40 cursor-pointer" onClick={handleFavoriteToggle}>
      <Image
        alt="heart"
        src={`/assets/images/ic-heart${isSelected ? '' : '-empty'}.svg`}
        height="20"
        width="20"
      />
    </div>
  )
}
