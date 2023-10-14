import React from 'react';

const UserDetailsModal = ({ userData, onClose }) => {
  return (
    <div className="
      flex
      items-center
      justify-center
      flex-col
      mt-10
    ">
      <div className="
        bg-white
        border-2
        border-gray-900
        border-solid
        rounded-md
        w-80
        main-button
      ">
        <span className="
        main-button
          text-gray-900
          text-2xl
          float-right
          mr-2
          mt-2
          cursor-pointer
        " onClick={onClose}>&times;</span>
        <div className='
        main-button
          text-gray-900
          text-md
          mb-2
          px-4
          py-2
          flex
          flex-col
        '>
          <p className='mb-2 mt-2 font-bold'>Name : <span className='font-semibold'>{userData.name}</span></p>
          <p className='mb-2 mt-2 font-bold'>Username : <span className='font-semibold'>{userData.login}</span></p>
          <p className='mb-2 mt-2 font-bold'>Bio : <span className='font-semibold'>"{userData.bio}"</span></p>
          <p className='mb-2 mt-2 font-bold'>Created at : <span className='font-semibold'>{userData.created_at}</span></p>
          <p className='mb-2 mt-2 font-bold'>Location : <span className='font-semibold'>{userData.location}</span></p>
          <p className='mb-2 mt-2 font-bold'>Public Repositories : <span className='font-semibold'>{userData.public_repos}</span></p>
          <p className='mb-2 mt-2 font-bold'>Company : <span className='font-semibold'>{userData.company}</span></p>
          <p className='mb-2 mt-2 font-bold'>Link : <a href={userData.html_url} target='blank'
          className='
          font-semibold
          text-blue-400
          hover:text-blue-600
          transition
          duration-500
          ease-in-out
          '
          >{userData.html_url}</a></p>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsModal;
