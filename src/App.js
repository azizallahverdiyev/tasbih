import { useEffect } from 'react';
import { useHapticFeedback, useInitData, useShowPopup, useThemeParams, useWebApp } from '@vkruglikov/react-telegram-web-app';
import './App.css';
import Release from './screens/Release';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Supporters from './screens/Supporters';

const tele = window.Telegram.WebApp;


function App() {
  const WebApp = useWebApp();

  useEffect(() => {
    tele.ready();
    tele.setHeaderColor("#000000");
    WebApp.expand();
  }, [])


  


  return (
    
    <div className="App">
       <Routes>
         <Route path='/' element={<Release />} />
         <Route path='/supporters' element={<Supporters/>} />
       </Routes>
     </div>
  );
}

export default App;
