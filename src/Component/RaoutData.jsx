import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { About } from "./Page/About";
import { Blog } from "./Page/Blog";
import { Home } from "./Page/Home";
import {Navbar} from "./Nav/Navbar"




export const RaoutData=() =>{
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/About"element={<About/>}/>
        <Route path="/Blog"element={<Blog/>}/>
       </Routes>
       </BrowserRouter> 
    </div>
  )
}