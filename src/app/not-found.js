import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h1 className='font-bold'>The page you are looking for is "NOT FOUND"</h1>
        <span>
            <Link href="/">Return Home</Link>
        </span>
    </div>
  )
}
