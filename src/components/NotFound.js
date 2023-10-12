import React from 'react';
import { BiError } from 'react-icons/bi';

const NotFound = () => {
  return (
    <div className='
        flex
        items-center
        justify-center
        flex-col
        text-gray-400
        italic
        px-4
        py-10
        text-2xl
    '>
      <BiError /> Profile Not Found
    </div>
  )
}

export default NotFound
