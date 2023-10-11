/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import UserDetailsModal from "./UserDetailsModal";
import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";

function UserInfo({ userData }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    >
      <div
      className="
      flex
      items-center
      justify-center
      flex-col
      pt-10
    "
    >
      <div
        className="
        text-center
        bg-gray-800
        text-white
        rounded-md
        px-4
        py-3
        hover:bg-gray-900
        transition
        duration-500
        ease-in-out
        ml-1
      "
      >
        <div
          className="
          text-3xl
          font-semibold
          text-white
          mb-10
        "
        >
          {userData.name}
        </div>
        <div
          className="
          flex
          items-center
          justify-center
          flex-col
        "
          id="panel-body"
        >
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
          />
          <div
            className="
            flex
            items-center
            justify-center
            flex-col
          "
          >
            <table
              className="
                table
                table-responsive
                table-striped
                table-hover
              "
            >
              <thead
                className="
                  text-center
                  bg-gray-800
                  text-white
                  rounded-md
                  px-4
                  py-2
                  ml-1
                "
              >
                <tr
                  className="
                    text-center
                    bg-gray-800
                    text-white
                    px-4
                    py-2
                    ml-1
                    rounded-md                   
                  "
                >
                  <th
                    className="
                      text-center
                      bg-gray-800
                      text-white
                      rounded-md
                      px-4
                      py-2
                      ml-1
                      border-2
                      mr-1
                    "
                  >
                    Followers&nbsp;
                  </th>
                  <th
                    className="
                      text-center
                      bg-gray-800
                      text-white
                      rounded-md
                      px-4
                      py-2
                      ml-1
                      border-2
                    "
                  >
                    Repositories&nbsp;
                  </th>
                  <th
                    className="
                      text-center
                      bg-gray-800
                      text-white
                      rounded-md
                      px-4
                      py-2
                      ml-1
                      border-2
                    "
                  >
                    Followed&nbsp;
                  </th>
                </tr>
              </thead>
              <tbody
                className="
                  text-center
                  bg-gray-800
                  text-white
                  rounded-md
                  px-4
                  py-2
                "
              >
                <tr>
                  <td
                    className="
                      text-center
                      mt-3
                      border-2
                      border-gray-300
                      border-solid
                      rounded-md
                    "
                  >
                    {userData.followers}
                  </td>
                  <td
                    className="
                      text-center
                      mt-3
                      border-2
                      border-gray-300
                      border-solid
                      rounded-md
                    "
                  >
                    {userData.public_repos}
                  </td>
                  <td
                    className="
                      text-center
                      mt-3
                      border-2
                      border-gray-300
                      border-solid
                      rounded-md
                    "
                  >
                    {userData.following}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
        <button className="
        bg-gray-800
          text-white
          rounded-md
          px-4
          py-2
          hover:bg-gray-900
          transition
          duration-500
          ease-in-out
          flex
          flex-row
        "
        onClick={handleOpenModal}>
          User Details <FiArrowDown className="
          ml-2
          mt-1
          text-white
          " />
        </button>

        {showModal && (
        <UserDetailsModal userData={userData} onClose={handleCloseModal} />
      )}
      <br/>
    </div>
    </motion.div>
  );
}

export default UserInfo;
