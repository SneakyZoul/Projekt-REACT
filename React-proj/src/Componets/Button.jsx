import React from 'react'

const Button = ({color,text,onShow}) => {
  return (
    <div>
        <button 
        onClick={onShow}
        style={{background:color}}>{text}</button>
      
    </div>
  )
}

export default Button
