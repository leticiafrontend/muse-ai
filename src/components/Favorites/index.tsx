'use client'
import Image from 'next/image'
import { useState } from 'react'

export const Favorites = () => {
  const [isSelected, setIsSelected] = useState()

  const handleFavoriteToggle = () => setIsSelected((isSelected) => !isSelected)

  return (
    <div
      className={`flex content-center gap-x-2 rounded-full ${isSelected ? 'bg-custom-mediumGray' : 'bg-custom-darkGray'} cursor-pointer px-6 py-2`}
      onClick={handleFavoriteToggle}
    >
      <Image
        alt="heart"
        src={`/assets/images/ic-heart${isSelected ? '' : '-empty'}.svg`}
        height="20"
        width="20"
      />
      <p className="font-semibold text-white">Favorites</p>
    </div>
  )
}
