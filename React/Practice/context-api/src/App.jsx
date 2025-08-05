import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'
import Card from './components/Card'
import { useTheme } from './Context/ThemeContext'

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`h-full w-full flex ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
      <button
        onClick={toggleTheme}
        style={{ position: 'absolute', top: 20, right: 20, zIndex: 1000 }}
        className="px-3 py-1 rounded border"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      {toggle ? (
        <Login toggle={toggle} setToggle={setToggle} userData={userData} setUserData={setUserData} />
      ) : (
        <Register toggle={toggle} setToggle={setToggle} userData={userData} setUserData={setUserData} />
      )}
      {userData.map((item, index) => {
        return <Card item={item} index={index} key={index} />;
      })}
    </div>
  );
};

export default App
