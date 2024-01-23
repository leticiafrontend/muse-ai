'use client'
import Image from 'next/image'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { Input } from '@/components/Input'

export const Header = () => {
  const path = usePathname()
  const isSong = path !== '/'

  return (
    <div className="flex h-20 justify-center bg-custom-black">
      <div className="flex w-full max-w-web items-center gap-x-14 max-xl:px-4">
        <Link href="/">
          <Image
            alt="Muse.ai"
            src="/assets/images/muse-ai.svg"
            width="87"
            height="22"
          />
        </Link>
        {isSong ? <Input /> : null}
      </div>
    </div>
  )
}
