import React from 'react'
import { SignedIn } from '@clerk/nextjs'

const page = () => {
  return (
    <SignedIn>
    <div className="h-screen">
      <iframe 
        src={process.env.LATEST_DOGE_LINK || ""} 
        className="w-full h-full border-none"
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-downloads"
        allowFullScreen
      />
    </div>
   </SignedIn>
  )
}

export default page
