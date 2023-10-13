import React, { useState } from 'react';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`
        flex
        items-center
        justify-center
        flex-col
        ${isDarkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}
        border-2
        rounded-md
        border-solid
        border-gray-300
        px-4
        py-2
        mb-10
      `}
      onClick={handleToggleMode}
    >
      {isDarkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default DarkMode;
