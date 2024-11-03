import React, { useEffect, useMemo, useState } from 'react'
import TasbihLogo from "../images/tasbihlogo.png";
import "./Release.css"
import ReleaseTime from '../components/ReleaseTime/ReleaseTime';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import Acce from '../components/Particles/Acce';
import { Link, Outlet } from 'react-router-dom';


function getTimeLeft(targetDate) {
  // Get current date and time in Baku
  const now = new Date();
  now.setHours(now.getHours() + now.getTimezoneOffset() / 60); // Adjust for Baku Timezone (+4 hours)

  // Calculate the difference in milliseconds
  const difference = targetDate.getTime() - now.getTime();

  // Extract days, hours, and minutes
  const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  // Return the formatted time left
  return {
    days: daysLeft.toString(),
    hours: hoursLeft.toString(),
    minutes: minutesLeft.toString(),
  };
}

// Set the target date for your app release

// Calculate the time left
function Release() {

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date(2024, 7, 15, 19, 0); // Year, Month, Day, Hour, Minute
    const newTimeLeft = getTimeLeft(targetDate);
    setTimeLeft(newTimeLeft);
  }, []);
  useEffect(() => {
    const targetDate = new Date(2024, 7, 15, 19, 0); // Year, Month, Day, Hour, Minute
    const intervalId = setInterval(() => {
      const newTimeLeft = getTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
    }, 60000); // Update every minute (60 seconds * 1000 milliseconds)

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, []);

  return (
    
    <div className='background-app'>
      <Acce />     
      <div className='image-container'>
        <img src={TasbihLogo} alt='Logo' className='image-logo'/>
      </div>
      <div className='text-container'>
        <h1 className='title-text'>Tasbih</h1>
        <h3 className='sub-text'>will release in</h3>
      </div>
      <div className='dates-container'>
        <ReleaseTime mymargin={55} datename="days" datecount={timeLeft.days}/>
        <ReleaseTime mymargin={30} datename="hours" datecount={timeLeft.hours}/>
        <ReleaseTime mymargin={30} datename="minutes" datecount={timeLeft.minutes}/>
      </div>
      <div className='buttons-container' style={{marginTop: "8vh"}}>
      <Link to="/supporters" style={{ textDecoration: 'none' }}>
        <ButtonComponent bgcolor="#fff" button_title="Supporters" text_color="black"/>
      </Link>
        <ButtonComponent bgcolor="#70C900" button_title="Tasbih Crypto" text_color="white" />

      </div>
      
    </div>
      
    

  )
}

export default Release