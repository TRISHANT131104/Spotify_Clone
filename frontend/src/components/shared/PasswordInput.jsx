import React from 'react'

export default function PasswordInput({label, placeholder}) {
  return (
    <div className='flex flex-col space-y-2 w-full'>
      <label htmlFor={label} className='font-semibold w-full'>{label}</label>
      <input id={label} type="password" placeholder={placeholder} className='p-3 border border-gray-400 focus:border-black rounded placeholder-gray-500 w-full'/>
    </div>
  )
}
