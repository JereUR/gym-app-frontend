import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href={'/'} className="font-bold text-3xl hover:cursor-pointer mx-4">
      LogoGymApp
    </Link>
  )
}
