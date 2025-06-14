import React from 'react'

const Cards = ({img,name,desc}) => {
  return (
	 <div style={{display:"flex", alignItems:"center" ,width:"33%"}}>
		<img src={img} alt="" style={{width:"60px",margin:"20px"}} />
		<div className="">
			<h4>{name}</h4>
			<p>{desc}</p>
		</div>
	 </div>
  )
}

export default Cards