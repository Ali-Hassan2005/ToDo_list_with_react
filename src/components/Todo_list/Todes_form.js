import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
const Todes_form = (props) => {
const [name , setname] =useState('');


function save (e){
  setname(e.target.value)
}

  return (
    <div className='todos-form'>
      <div className="todos-form_icon">
        <FeatherIcon icon='circle' onClick={props.tog}/> 
      </div>
      <div className="todos-form_form">
        <input onChange={save} type="text" placeholder='add new ....' value={name} />
      </div>
      <div className="todos-form_submit">
        <button onClick={()=>{props.add(name);setname('')}} className='btn'>add</button>
      </div>
    </div>
  )
}

export default Todes_form