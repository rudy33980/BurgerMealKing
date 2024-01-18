import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-6xl h-full m-auto px-5 md:px-0 lg:px-40'>
      {children}
    </div>
  )
}
