'use client'
import Image from 'next/image'

import { useSongs } from '@/hooks/Songs'
import { SongType } from '@/types'

export const FavoriteButton = ({ song }: SongType) => {
  const { handleFavoriteClick, favorites } = useSongs()

  const favoritesLocal = JSON.parse(localStorage.getItem('favorites'))
  const isSelected =
    favorites.some((favorite) => favorite.id === song.id) ||
    favoritesLocal?.some((favorite) => favorite.id === song.id)

  const handleFavoriteToggle = () => {
    handleFavoriteClick(song)
  }

  return (
    <div className="z-50 cursor-pointer" onClick={handleFavoriteToggle}>
      <Image
        alt="heart"
        src={`/assets/images/ic-heart${isSelected ? '' : '-empty'}.svg`}
        height="20"
        width="20"
      />
    </div>
  )
}
