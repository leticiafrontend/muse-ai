import Image from 'next/image'

export const Header = () => {
  const isSong = true

  return (
    <div className="flex justify-center bg-custom-black py-7">
      <div className="flex w-full max-w-web gap-x-14">
        <Image
          alt="Muse.ai"
          src="/assets/images/muse-ai.svg"
          width="87"
          height="22"
        />
        {isSong ? <input type="text" /> : null}
      </div>
    </div>
  )
}
