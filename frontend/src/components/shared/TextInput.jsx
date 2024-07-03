import React from 'react'

export default function TextInput({label, placeholder,className}) {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      <label htmlFor={label} className='font-semibold w-full'>{label}</label>
      <input id={label} type="text" placeholder={placeholder} className='p-3 border border-gray-400 focus:border-black rounded placeholder-gray-500 w-full'/>
    </div>
  )
}
