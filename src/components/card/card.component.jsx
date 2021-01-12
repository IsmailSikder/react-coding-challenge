import React from "react"
import './card.style.css'

export const StreamingCard = (props)=>{

  const {title,discription, programType,images,releaseYear} = props.streaming
  const image = images['Poster Art']

 // console.log(image.height)
  //console.log(image)
return(
    <div className= 'card-container' >
      <img  alt='media' src={image.url} style={{hight: 70,width:250}} />
      <h2>{title}</h2>
      <p>{discription}</p>
      <p>{programType}</p>
      <p>{releaseYear}</p>
    </div>

)
}

export default StreamingCard