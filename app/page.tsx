import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="absolute top-1/3 transform -translate-y-1/2">
        <Link href="/launcher">
          <h1 className='text-5xl font-medium'>Launch</h1>
        </Link>
      </div>
    </div>
  )
}

export default page
