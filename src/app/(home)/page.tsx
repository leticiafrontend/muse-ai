import { Favorites } from '@/components/Favorites'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white">Hello world!</h1>
      <Favorites />
    </main>
  )
}

export default Home
