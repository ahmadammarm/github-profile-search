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
        bg-gray-900
        rounded-md
        w-80
      ">
        <span className="
          text-white
          text-2xl
          float-right
          mr-2
          mt-2
          cursor-pointer
        " onClick={onClose}>&times;</span>
        <div className='
          text-white
          text-md
          mb-2
          px-4
          py-2
          flex
          flex-col
        '>
          <p className='mb-2 mt-2'>Name : {userData.name}</p>
          <p className='mb-2 mt-2'>Username : {userData.login}</p>
          <p className='mb-2 mt-2'>Location : {userData.location}</p>
          <p className='mb-2 mt-2'>Public Repositories : {userData.public_repos}</p>
          <p className='mb-2 mt-2'>Company : {userData.company}</p>
          <p className='mb-2 mt-2'>Link: <a href={userData.html_url} target='blank'
          className='
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
