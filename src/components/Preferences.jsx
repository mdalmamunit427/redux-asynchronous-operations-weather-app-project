import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../redux/features/preferences/preferencesSlice';

const Preferences = () => {
  const darkMode = useSelector((state) => state.preferences.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Preferences</h2>
      <p>Dark Mode: {darkMode ? 'Enabled' : 'Disabled'}</p>
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Preferences;
