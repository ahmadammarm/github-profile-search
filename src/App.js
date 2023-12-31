import React, { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import UserInfo from "./components/UserInfo";
import UserDetailsModal from "./components/UserDetailsModal";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";
import { motion } from "framer-motion";
import "./App.css";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  const [userData, setUserData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userFound, setUserFound] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isDarkMode, setIsDarkMode] = useState(false);
  const getData = async (username) => {
    setIsLoading(true);
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    if (userResponse.ok) {
      const userJson = await userResponse.json();
      setUserData(userJson);
      setIsLoading(false);
      setUserFound(true);
    } else {
      setIsLoading(false);
      setUserFound(false);
    }
  };

  const handleRefresh = () => {
    setTimeout(() => {
      window.location.reload();
    });
  };

  return (
    <div
    className={`main flex items-center justify-center pt-3 flex-col min-h-screen ${
      isDarkMode ? "dark" : ""
    }`}
  >
      <h2
        className="
        main
        text-3xl
        font-semibold
        text-gray-800
        mb-5
      "
      >
        Github Profile Searcher
      </h2>
      <DarkMode />
      <form
      className="input-form mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.username.value;
          getData(username);
        }}
      >
        <div>
          <input
            type="text"
            className="
            border
            border-gray-300
            text-gray-600
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
          <button
            type="submit"
            className="
            main-button
            text-white
            rounded-md
            px-4
            py-2
            hover:bg-gray-800
            hover:text-white
            transition
            duration-500
            ml-1"
          >
            Get User
          </button>
          <button
            type="button"
            onClick={handleRefresh}
            className="
            bg-teal-800
            text-white
            rounded-md
            px-4
            py-2
            hover:bg-teal-700
            transition
            duration-500
            ml-1"
          >
            <FiRefreshCcw />
          </button>
        </div>
      </form>
      <Footer />
      {userFound ? (
        <>
          {isLoading && <Loader />}
          {userData && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <UserInfo userData={userData} isDarkMode={isDarkMode} />
            </motion.div>
          )}
          {showUserDetails && <UserDetailsModal userData={userData} isDarkMode={isDarkMode} />}
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default App;
