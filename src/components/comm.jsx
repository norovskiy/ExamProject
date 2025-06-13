import React from 'react'
import "/src/App.css"

const Comm = ({star, uptex, text, img, name, nick}) => {
  return (
	 <div className='Comments' style={{color:"black", width:"300px", padding:"15px", borderRadius:"20px"}}>
		<h3>{star}</h3>
		<h4>{uptex}</h4>
		<p>{text}</p>
		<div className=""style={{display:"flex", width:"200px", alignItems:"center"}}>
			<img src={img} alt="" />
			<div className="">
				<h4>{name}</h4>
				<p style={{color:"blue"}}>{nick}</p>
			</div>
		</div>
	 </div>
  )
}

export default Comm