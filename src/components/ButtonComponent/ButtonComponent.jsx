import React from 'react'
import "./ButtonComponent.css"
import { Link, Outlet } from 'react-router-dom'

function ButtonComponent({bgcolor, button_title, text_color}) {
  return (
    
      <div className='button-container' style={{backgroundColor: bgcolor}}>
        <h1 className='button-text' style={{color: text_color}}>{button_title}</h1>
      </div>
    
    
    
    
  )
}

export default ButtonComponent