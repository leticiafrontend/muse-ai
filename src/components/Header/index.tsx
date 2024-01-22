import Image from 'next/image'

import { Input } from '@/components/Input'

export const Header = () => {
  const isSong = true

  return (
    <div className="flex h-20 justify-center bg-custom-black">
      <div className="flex w-full max-w-web items-center gap-x-14">
        <Image
          alt="Muse.ai"
          src="/assets/images/muse-ai.svg"
          width="87"
          height="22"
        />
        {isSong ? <Input /> : null}
      </div>
    </div>
  )
}
