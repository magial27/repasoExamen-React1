import  React  from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useState, useContext } from 'react';
import './Header.css'
import { useEffect } from 'react';


export default function Header() {
  let {authToken, setAuthToken, usuari, setUsuari}=useContext(UserContext)
  const { id } = useParams()


  const getUser = async () => {

    console.log("Comprovant credencials....");
  
    // Enviam dades a l'aPI i recollim resultat
    try {
      const data = await fetch("http://localhost:3004/users", {
        headers: {
          Accept: "application/json",
        "Content-Type": "application/json",

        },
        method: "GET",
      });

      const resposta = await data.json();


        console.log(resposta)
        console.log(id)



    } catch {
      console.log("Error");
      alert("catch");
    }
  };

  // const logout = async (e) => {
  //   e.preventDefault();
  //   console.log("Comprovant credencials....");
  
  //   // Enviam dades a l'aPI i recollim resultat
  //   try {
  //     const data = await fetch("https://backend.insjoaquimmir.cat/api/logout", {
  //       headers: {
  //         Accept: "application/json",
  //       "Content-Type": "application/json",
  //       'Authorization': 'Bearer '  + authToken,

  //       },
  //       method: "POST",
  //     });

  //     const resposta = await data.json();
  //     if (resposta.success === true){
  //       console.log(resposta.authToken);
  //        setAuthToken('')    

  //     }
        
  //     else 
  //       alert("La resposta no ha triomfat");
  //       console.log(resposta)

  //   } catch {
  //     console.log("Error");
  //     alert("catch");
  //   }
  // };

  useEffect(() => {
    getUser();
  }, [])


  return (
    <>
      <div className='cabecera'>
        <div className='botones'>
          <Link to="/places" >Places </Link>
          <Link to="/posts">Posts </Link>
          <Link to="/about">About </Link>
        </div>
        <p className='roles-name'> USER: {usuari} 
        </p>
        <button className='boton-logout'
          onClick={(e) => {
            logout(e);
          }}> Log Out 
        </button>
      </div>
      <hr />
    </>
  );
}