import React from 'react'

const Card = ({img,name,desc}) => {
  return (
	 <div>
		<img src={img} alt="" />
		<h3>{name}</h3>
		<p>{desc}</p>
	 </div>
  )
}

export default Card