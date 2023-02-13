import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../userContext';
import './PlacesList.css';
import { TodoList } from './TodoList';



const TodosList = () => {
  let [ todos, setTodos] = useState([]);
  let { usuari, setUsuari} = useContext(UserContext)
  let [refresh,setRefresh] = useState(false)

  const getTodos = async (e) => {
      try {
  
        const data = await fetch("http://localhost:3004/todos", {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          method: "GET",
      })
        const resposta = await data.json();
        console.log(resposta);

          setTodos(resposta);
          console.log(todos);          
        
      } catch {
        console.log("Error");
        console.log("catch");
      }
    };

    // const deleteTodo = async (e,id) =>{
    //   e.preventDefault();
    //   try{
    //     const data = await fetch("http://localhost:3004/todos" + id, {
    //       headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       },
    //       method: "DELETE",
    //   })
  
    //     const resposta = await data.json();
    //     console.log(resposta);

    //       setRefresh(!refresh);
    //       alert("Place eliminat correctament");
    //       console.log("Place eliminat correctament");
  
    //   }catch {
    //     console.log(data);
    //     console.log("catch");
    //   }
    // }

    useEffect(()=>{
      getTodos();
  }, [])

return (
  <>
  <div>TodosList</div>
  <div className="container">

    <table className="table">
      <thead>
        <tr>
          <th><h1>ID</h1></th>
          <th><h1>ID USER</h1></th>
          <th><h1>TITLE</h1></th>
          <th><h1>COMPLETED</h1></th>
          <th colSpan={4}><h1>ACTIONS</h1></th>
        </tr>
      </thead>
      <tbody>
      {todos.map((todo) => (
        
          (<tr  key={todo.id}><TodoList todo={todo} /></tr>)
        ))}

      </tbody>
    </table>
  </div>
</>
)
}

export default TodosList