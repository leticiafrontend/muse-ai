'use client'
import Image from 'next/image'
import { useState } from 'react'

export const FavoriteButton = () => {
  const [isSelected, setIsSelected] = useState()

  const handleFavoriteToggle = () => setIsSelected((isSelected) => !isSelected)

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
