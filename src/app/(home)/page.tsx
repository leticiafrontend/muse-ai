'use client'
import { useEffect } from 'react'

import { Favorites } from '@/components/Favorites'
import { Input } from '@/components/Input'
import { ListSongs } from '@/components/ListSongs'
import { Loading } from '@/components/Loading'
import { OrderToggle } from '@/components/OrderToggle'
import { useSongs } from '@/hooks/Songs'

const Home = () => {
  const { loading, songs, getInitialSongs, getFavoriteSongs, favoriteToggle } =
    useSongs()

  useEffect(() => {
    if (!favoriteToggle) {
      getInitialSongs()
    }
    getFavoriteSongs()
  }, [])

  const totalSongs = songs.length

  if (loading) return <Loading />

  return (
    <main className="mx-auto my-0 min-h-screen max-w-web">
      <div className="flex justify-between py-14 max-xl:px-4 max-md:flex-col max-md:content-center max-md:items-center">
        <div>
          <div className="flex gap-2 max-sm:flex-col max-sm:items-center">
            <h1 className="text-3xl font-semibold text-white">Your Library</h1>
            <Favorites />
          </div>
          <p className="pt-2 text-custom-gray">
            You have {totalSongs} songs in your library
          </p>
        </div>
        <div className="flex gap-x-6 max-md:flex-col max-md:items-center max-md:pt-8">
          <div className="mt-2 max-md:pb-8">
            <OrderToggle />
          </div>
          <Input />
        </div>
      </div>
      <ListSongs songs={songs} />
    </main>
  )
}

export default Home
