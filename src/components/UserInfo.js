import React from 'react'

const UserInfo = ({
    userData
}) => {
  return (
    <div className='
        flex
        flex-col
        items-center
        justify-center
        mt-10
        mb-10
    '>
      <img
      className='
        w-40
        h-40
        rounded-full
        border-4
        border-gray-800
      '
      src={userData.avatar_url} alt='Profile Github'/>
    </div>
  )
}

export default UserInfo
