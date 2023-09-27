import React, { createContext,useReducer } from "react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import "./App.css";
import Errorpage from "./components/errorpage";
import 'bootstrap/dist/css/bootstrap.css';
import Logout from "./components/Logout";
import { initialState,reducer } from "./reducer/UseReduces";

// 1.Context API
export const UserContext = createContext();

const Routing=()=>{
return(
  <Routes>
    <Route exact path="/" element={<Home />} />

    <Route path="/about" element={<About />} />

    <Route path="/contact" element={<Contact />} />

    <Route path="/login" element={<Login />} />

    <Route path="/signup" element={<Signup />} />

    <Route path="/logout" element={<Logout />} />

    <Route path="*" element={<Errorpage />} />
  </Routes>
)
}


const App=()=>{

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>


      <UserContext.Provider value={{ state, dispatch }} >
      <Navbar/>
      

     <Routing/>


      </UserContext.Provider>
      
    </>
  )
}

export default App;