import React from 'react'

export default function IconText({Icon, displayText, active}) {
  return (
    <div className={`${active ? "text-white": "text-gray-400"} flex py-3 items-center justify-start w-full cursor-pointer`}>
      <div className='hover:text-white'>
        {Icon}
      </div>
      <div className='text-xl px-3 font-medium hover:text-white'>
        {displayText}
      </div>
    </div>
  )
}
