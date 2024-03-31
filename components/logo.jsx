import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
    <Image
      height={5000}
      width={5000}
      className="max-w-[100px] md:max-w-[165px]"
      src="/lws_logo.png"
      alt="Lws"
    />
  </Link>
  )
}

export default Logo