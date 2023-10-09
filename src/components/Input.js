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
      <form>
        <input type="text" autoComplete='off' placeholder='Enter a Github Username' className='
            border
            border-gray-300
            rounded-l
            px-4
            py-2
            w-80
        ' />
        <button className='
            bg-gray-800
            text-white
            rounded-md
            px-4
            py-2
            hover:bg-gray-900
            ml-1
        '>Submit</button>
      </form>
    </div>
  )
}

export default Input