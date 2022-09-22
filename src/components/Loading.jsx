import React from 'react'

function Loading() {
  return (
    <div className='flex justify-between animate-spin'>
      <div className='bg-gradient-to-br animate-wiggle from-orange-600 to-red-800 rounded-full h-14  w-14'></div>
      <div className='bg-gradient-to-br animate-wiggledos from-sky-600 to-green-800 rounded-full h-14 w-14'></div>
    </div>
  )
}

export default Loading