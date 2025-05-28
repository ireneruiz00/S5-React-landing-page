import React from 'react'
import Buttons from '../Buttons/Buttons'
import bgDots from "../../assets/Imagenes/bg-dots.svg"

function Cards(props) {
  return (
    <div className={`${props.logo} card`}>
        <img src={props.img_logo} alt={props.alt_logo} />
        <h4>{props.h4_content}</h4>
        <p>{props.p_content}</p>
        <img src={bgDots} alt="bg-dots" />
        <Buttons button_content={'Add & Install Extension'} button_class={'btn-azul-centered'}/>
    </div>
  )
}

export default Cards