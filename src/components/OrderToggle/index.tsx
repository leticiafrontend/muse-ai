'use client'
import { useSongs } from '@/hooks/Songs'

export const OrderToggle = () => {
  const { orderToggle, handleOrderToggle } = useSongs()

  return (
    <div className="flex">
      <label className="flex gap-x-3">
        <span className="font-semibold text-white">Sort from A-Z</span>
        <div className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value=""
            className="peer sr-only outline-none"
            onChange={handleOrderToggle}
            checked={orderToggle}
          />
          <div className="peer h-6 w-11 rounded-full bg-custom-darkGray after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-custom-lightBlue peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"></div>
        </div>
      </label>
    </div>
  )
}
