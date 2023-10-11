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
          text-xl
          mb-2
          px-4
          py-2
          flex
          flex-col
        '>
          <p>Name : {userData.name}</p>
          <p>Username : {userData.login}</p>
          <p>Location : {userData.location}</p>
          <p>Followers : {userData.followers}</p>
          <p>Following : {userData.following}</p>
          <p>Public Repositories : {userData.public_repos}</p>
          <p>Public Gists : {userData.public_gists}</p>
          <p>Company : {userData.company}</p>

        </div>
        
      </div>
    </div>
  );
}

export default UserDetailsModal;
