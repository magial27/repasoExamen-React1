import React, { useContext, useState} from 'react'
import '../App.css'
import { UserContext } from '../userContext'
import { Link } from 'react-router-dom'

export const TodoList = ({todo}) => {
  let { usuari, setUsuari } = useContext(UserContext)

  return (
    <>
      <td>{todo.id}</td>
      <td>{todo.userId}</td>
      <td>{todo.title}</td>
      {todo.completed ? 
      <td>Si</td> : <td>No</td>}
      



    </>
  )
}
