import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    function ee (){
      if(props.todos.length === 0){
        return <h1 className='no-todos'>There are no tasks currently</h1>
      }
    }
  return (
    <div className=''>
      {props.todos.map(e =>{
        return(
        <Todo done={props.done} Delete={props.Delete} Todo= {e} key ={e.id}  />)
      })}
      
      {ee()}
    </div>
  )
}

export default Todos