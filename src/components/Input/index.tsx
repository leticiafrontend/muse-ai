import Image from 'next/image'
import React from 'react'

export const Input = () => {
  const isTyping = true

  const data = ['1', '2', '3']

  return (
    <div>
      <div className="relative">
        <Image
          alt="Search"
          src="/assets/images/ic-search.svg"
          width="20"
          height="20"
          className="absolute left-2 top-2"
        />
      </div>

      <input
        type="text"
        className="w-96 rounded-lg bg-custom-darkGray p-2 pl-9 text-white outline-none placeholder:text-white focus:bg-custom-mediumGray"
        placeholder="Search in your library"
      />

      {isTyping ? (
        <ul className="absolute mt-2 w-96 rounded-lg bg-custom-darkGray p-4">
          {data.map((item) => (
            <li
              className="cursor-pointer border-b border-custom-mediumDarkGray pb-4 pt-4 text-custom-lightGray first:pt-0 last:border-0 last:pb-0"
              key={item}
            >
              option {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
