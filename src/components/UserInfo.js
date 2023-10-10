import React from 'react';

function UserInfo({ userData }) {
  return (
    <div className='
      flex
      items-center
      justify-center
      flex-col
      pt-10
    '>
      <div className="
        text-center
        bg-gray-800
        text-white
        rounded-md
        px-4
        py-2
        hover:bg-gray-900
        transition
        duration-500
        ease-in-out
        ml-1
      ">
        <div className="
          text-3xl
          font-semibold
          text-white
          mb-10
        ">User Information</div>
        <div className="
          flex
          items-center
          justify-center
          flex-col
        " id="panel-body">
              <img
                className="
                  rounded-full
                  border-4
                  border-gray-300
                  mb-5
                "
                src={userData.avatar_url}
                height="120"
                width="120"
                alt="avatar"
              />
          <div className="
            flex
            items-center
            justify-center
            flex-col
          ">
              <table className='
                table
                table-responsive
                table-striped
                table-hover
              '>
                <thead className='
                  text-center
                  bg-gray-800
                  text-white
                  rounded-md
                  px-4
                  py-2
                  ml-1
                '>
                  <tr className='
                    text-center
                    bg-gray-800
                    text-white
                    px-4
                    py-2
                    ml-1
                    rounded-md                   
                  '>
                    <th className='
                      text-center
                      bg-gray-800
                      text-white
                      rounded-md
                      px-4
                      py-2
                      ml-1
                      border-2
                      mr-1
                    '>Followers&nbsp;</th>
                    <th className='
                      text-center
                      bg-gray-800
                      text-white
                      rounded-md
                      px-4
                      py-2
                      ml-1
                      border-2
                    '>Repositories&nbsp;</th>
                    <th className='
                      text-center
                      bg-gray-800
                      text-white
                      rounded-md
                      px-4
                      py-2
                      ml-1
                      border-2
                    '>Followed&nbsp;</th>
                  </tr>
                </thead>
                <tbody className='
                  text-center
                  bg-gray-800
                  text-white
                  rounded-md
                  px-4
                  py-2
                '>
                  <tr>
                    <td className='
                      text-center
                      mt-3
                      border-2
                      border-gray-300
                      border-solid
                      rounded-md
                    '>{userData.followers}</td>
                    <td className='
                      text-center
                      mt-3
                      border-2
                      border-gray-300
                      border-solid
                      rounded-md
                    '>{userData.public_repos}</td>
                    <td className='
                      text-center
                      mt-3
                      border-2
                      border-gray-300
                      border-solid
                      rounded-md
                    '>{userData.following}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
      <br /><br />
      <div id="long-info">
        <table className="table table-reponsive table-striped table-hover">
          <caption>User Details</caption>
          <tbody>
            <tr>
              <td>Nama:</td>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <td>Lokasi:</td>
              <td>{userData.location}</td>
            </tr>
            <tr>
              <td>Dibuat pada:</td>
              <td>{userData.created_at}</td>
            </tr>
            <tr>
              <td>Repositori Publik:</td>
              <td>{userData.public_repos}</td>
            </tr>
            <tr>
              <td>Gists Publik:</td>
              <td>{userData.public_gists}</td>
            </tr>
            <tr>
              <td>URL Profil:</td>
              <td>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                  {userData.html_url}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserInfo;
