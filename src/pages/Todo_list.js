import React from 'react'
import Todes_form from '../components/Todo_list/Todes_form'
import Todos from '../components/Todo_list/Todos'
import Header from '../components/Todo_list/Header'
import { useState } from 'react'

// const idata =[
//   {id :1, name :"aaaa",done : false},
//   {id :2, name :"aadvdfa",done : false},
//   {id :3, name :"aagdaa",done : false},
//   {id :4, name :"aagdaa",done : true}
  
// ]


let idata =[];
if(localStorage.getItem("Todes")){
  idata = JSON.parse(localStorage.getItem("Todes"));
}
else{idata=[]}

console.log(idata);


const Todo_list = () => {
  const [todos , set_todos] =useState(idata);
  

  // function e (id){
  //   let newtodo = todos;
  //   for( let i =0 ; i<newtodo.length;i++ ){
  //     if(newtodo[i].id ===id){
  //       newtodo[i].done =!newtodo[i].done
  //     }
  //   }
  //   console.log(newtodo);
  //   set_todos(newtodo);
  //   console.log(todos);
  // }

  function done(id) {
    let newTodos = todos.map(todo => {
      if (todo.id === id) {
          todo.done = !todo.done
      }
      return todo;
    });
    set_todos(newTodos);
  }
  
  function Delete(id) {
    let newTodos = todos.filter((todo) => (todo.id !==id));
    set_todos(newTodos);
  }

  function add (name){
    let newtodo ={
      id : new Date().getTime(),
      name: name ,
      done : false
    }
    if(newtodo.name.trim()){
    set_todos((data)=>{
      return([newtodo,...data])
    })}

  }


  function tog (){
    let newTodes = todos.filter((todo) => !todo.done)
    set_todos(newTodes)
  }

  localStorage.setItem("Todes" ,JSON.stringify(todos));


  return (
    <>
    <Header/>
    <main>
    <div className='container'>
      <div className="todos">
        <Todes_form add={add}  tog={tog} />
        <Todos todos={todos} done ={done} Delete={Delete} />
      </div>
    </div>
    </main>
    </>
  )
}

export default Todo_list