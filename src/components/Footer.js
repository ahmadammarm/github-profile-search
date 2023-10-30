import React from 'react'

const Footer = () => {
  return (
    // Membuat footer
    <div className='
        flex
        items-center
        justify-center
        flex-col
        text-gray-400
        italic
        px-4
    '>
      <p>&copy; Created by <a href='https://ammar-porto.vercel.app' target='_blank' rel="noopener noreferrer" className='
      text-gray-500
      hover:text-gray-400
      transition
      duration-500
      ease-in-out
      '>ammar</a>.</p>
    </div>
  )
}

export default Footer
