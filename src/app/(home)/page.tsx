import { Favorites } from '@/components/Favorites'
import { OrderToggle } from '@/components/OrderToggle'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white">Hello world!</h1>
      <Favorites />
      <OrderToggle />
    </main>
  )
}

export default Home
