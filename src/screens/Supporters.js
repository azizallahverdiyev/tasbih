import React from 'react'
import TasbihLogo from "../images/tasbihlogo.png";
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import "./Supporters.css"
import AccessTask from '../components/AccessTask/AccessTask';


function Supporters() {
  return (
    <div className='background-app'>
     
      <div className='image-container'>
        <img src={TasbihLogo} alt='Logo' className='image-logo'/>
      </div>
      <div className='text-container'>
        <h1 className='title-text-s'>Get Early Access</h1>
        <h3 className='sub-text-s'>Completed 0/3</h3>
      </div>
      <div className='tasks-container'>
        <AccessTask mymargin={20} title="Invite 5 friends" completed="0/5"/>
        <AccessTask mymargin={10} title="Join Tasbih Crypto Channel" completed="0/1"/>
        <AccessTask mymargin={10} title="Adverisement" completed="0/1"/>
        <AccessTask mymargin={10} title="Invite 5 friends" completed="0/5"/>
        <AccessTask mymargin={10} title="Invite 5 friends" completed="0/5"/>


      </div>

      <div className='buttons-container' style={{marginTop: "8vh"}}>

        <ButtonComponent bgcolor="#70C900" button_title="Tasbih Crypto" text_color="white" />

      </div>
      
    </div>
  )
}

export default Supporters