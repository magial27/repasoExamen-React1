import "./style.css"
import React, {useState} from 'react'
import LoginRegister  from './auth/LoginRegister';
import { UserContext } from "./userContext";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import TodosList from "./todos/TodosList";
import TodosMenu from "./todos/TodosMenu";


export default function App() {
  let [usuari, setUsuari] = useState("");

  return (
    <>
      <UserContext.Provider value= { { usuari, setUsuari }}>
        {usuari ? (
          <>
            <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />


              <Route path="/todos" element={<> <TodosMenu/><TodosList /> </>} />
              <Route path="/" element={<> <TodosMenu/><TodosList /> </>} />

            </Routes>
            <Footer />
          </>
        ) : (
          <LoginRegister />
        )}
      </UserContext.Provider>
    </>
  );
}
