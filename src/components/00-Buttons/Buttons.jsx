import React from 'react'
import "./Buttons.css"

function Buttons(props) {
  return (
    <>
    <button className={props.button_class}>{props.button_content}</button>
    </>
  )
}

export default Buttons