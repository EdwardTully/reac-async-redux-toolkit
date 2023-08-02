import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from './todoSlice'



function TodosView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todoData = useSelector((state) => state.todos);

  //prefiltering todoData to create data sets that are complete or uncomplete, this was the easiest way for me to manage
  //this since I couldnt do it with .map

  const unFinishedTodos = todoData.todos.filter((ea)=>{
    if(ea.completed===false){
      return ea
    }
  })
  const finishedTodos = todoData.todos.filter((ea)=>{
    if(ea.completed===true){
      return ea
    }
  })


  return (
    <div>
      <h1>Todos To Do</h1>
      <div id="todostodo">
        {todoData.loading && <div>Loading...</div>}
        {!todoData.loading && todoData.error ? (
          <div>Error: {todoData.error}</div>
        ) : null}
        {!todoData.loading && unFinishedTodos.length ? (
          <ul>
          
            {unFinishedTodos.map((ea) => (
              <li
                key={ea.id}
              >{`This ${ea.title} has a complete status of ${ea.completed}`}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <h1>Completed Todos</h1>

      {!todoData.loading && finishedTodos.length ? (
        
          <ul>
            {finishedTodos.map((ea) => (
              
              <li key={ea.id} >{`This ${ea.title} has a complete status of ${ea.completed}`}</li>
            ))}
          </ul>
        ) : null}
    </div> 
  );
}

export default TodosView