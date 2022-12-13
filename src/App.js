import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Profile from './pages/Profile';
import Home from './pages/Home';
// import classNames from 'classNames';
// import './styles/component/Loading.scss';
import styles from './styles/component/Loading.scss';

function App() {
  const [playAnimation, setPlayAnimation] = useState(false);
  useEffect(() => {
    const onPageLoad = async () => {
      setTimeout(() => {
        setPlayAnimation(true);
      }, 100);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      // debugger;
      onPageLoad();
    } else {
      // debugger;
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => {
        // debugger;
        window.removeEventListener('load', onPageLoad)
      };
    }
  }, []);
  return (
    <div className="App">
      {
        playAnimation ?
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
          : <div className="loading">yyoooo</div>
      }
    </div>
  );
}

export default App;
