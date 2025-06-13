import React from 'react'
import "/src/App.css"

const More = ({img,name,desc}) => {
  return (
	 <div style={{width:"220px", }}>
		<img src={img} alt="" style={{width:"60px",margin:"20px"}} />
			<h4>{name}</h4>
			<p>{desc}</p>
	 </div>
  )
}

export default More