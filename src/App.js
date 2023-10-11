import React, { useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import UserInfo from './components/UserInfo';
// import Footer from './components/Footer';

function App() {
  const [userData, setUserData] = useState(null);

  const getData = async (username) => {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userJson = await userResponse.json();
    setUserData(userJson);
  };
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="
      flex
      items-center
      justify-center
      flex-col
      pt-10
    ">
      <h2 className='
        text-3xl
        font-semibold
        text-gray-800
        mb-10
      '>Github User Searcher</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.username.value;
          getData(username);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            className="border
            border-gray-300
            rounded-l
            px-4
            py-2
            w-80"
            id="username"
            name="username"
            aria-describedby="username"
            placeholder="Enter your github username"
            autoComplete="off"
          />
          <button type="submit" className="
            bg-gray-800
            text-white
            rounded-md
            px-4
            py-2
            hover:bg-gray-700
            transition
            duration-500
            ml-1">
            Get User
          </button>
          <button type="button" onClick={handleRefresh} className="
            bg-gray-800
            text-white
            rounded-md
            px-4
            py-2
            hover:bg-gray-700
            transition
            duration-500
            ml-1">
            <FiRefreshCcw />
          </button>
        </div>
      </form>
      {userData && <UserInfo userData={userData} />}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
