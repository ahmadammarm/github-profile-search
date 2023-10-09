import React from 'react'

const Input = () => {
  return (
    <div className='
        flex
        items-center
        justify-center
        mt-10
        mb-10
    '>
        <input type="text" autoComplete='off' placeholder='Enter a Github Username' className='
            border
            border-gray-300
            rounded-l
            px-4
            py-2
            w-80
        ' />
    </div>
  )
}

export default Input