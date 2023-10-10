import React from 'react'

const Footer = () => {
  return (
    // Membuat footer
    <div className='
        flex
        items-center
        justify-center
        flex-col
        fixed
        bottom-0
        w-full
        bg-gray-800
        text-white
        px-4
        py-2
    '>
      <p>&copy; Created by <a href='https://ahmadammarm.github.io/ammar' target='_blank' rel="noopener noreferrer" className='
      text-white
        hover:text-gray-400
        transition
        duration-500
        ease-in-out
      '>ammar</a>.</p>
    </div>
  )
}

export default Footer
