import React from 'react'
import FeatherIcon from 'feather-icons-react'

const Todo = (props) => {
  return (
    <div className={`todos-todo ${props.Todo.done ? 'done' :''} `}>
      <div onClick={()=> props.done(props.Todo.id)} className="todos-todo_icon">
        <FeatherIcon   icon= {props.Todo.done ? "check-circle": 'circle'}/>
      </div>
      <div className="todos-todo_text">{props.Todo.name}</div>
      <div className="todos-todo_cta">
        <div className="todos-todo_cta-edit">
          <FeatherIcon icon='edit'/>
        </div>
        <div onClick={()=>{props.Delete(props.Todo.id)}} className="todos-todo_cta-delete">
          <FeatherIcon icon='trash-2'/>
        </div>
      </div>
    </div>
  )
}

export default Todo