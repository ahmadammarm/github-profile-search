import React, { useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import UserInfo from './components/UserInfo';
import UserDetailsModal from './components/UserDetailsModal';
import Footer from './components/Footer';
import Loader from './components/Loader'; 

function App() {
  const [userData, setUserData] = useState(null);
  const [showUserDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (username) => {
    setIsLoading(true);
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userJson = await userResponse.json();
    setUserData(userJson);
    setIsLoading(false);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="
      flex
      items-center
      justify-center
      flex-col
      pt-6
    ">
      <h2 className='
        text-3xl
        font-semibold
        text-gray-800
        mb-10
      '>Github Profile Searcher</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.username.value;
          getData(username);
        }}
      >
        <div>
          <input
            type="text"
            className="border
            border-gray-300
            rounded-md
            px-4
            py-2
            w-80
            md:w-96
            focus:outline-none
            focus:ring-2
            focus:ring-gray-600
            focus:border-transparent
            transition
            duration-300
            ease-in-out
            "
            id="username"
            name="username"
            aria-describedby="username"
            placeholder="Enter a github username"
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
            bg-teal-800
            text-white
            rounded-md
            px-4
            py-2
            hover:bg-teal-700
            transition
            duration-500
            ml-1">
            <FiRefreshCcw />
          </button>
        </div>
      </form>
      <Footer />
      {isLoading && <Loader />}
      {userData && <UserInfo userData={userData} />}
      {showUserDetails && <UserDetailsModal userData={userData} />}
    </div>
  );
}

export default App;
