import Link from 'next/link'
import React from 'react'

const CustomButton = ({ containerStyle, text } : { containerStyle: string, text: string }) => {
  return (
    <Link href="" className={`${containerStyle} group relative overflow-hidden bg-blue-800 uppercase inline-flex items-center justify-center`}>
        <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32'></span>
        <span className='ease relative text-white transition duration-300 group-hover:text-white'>{text}</span>
    </Link>
  )
}

export default CustomButton
