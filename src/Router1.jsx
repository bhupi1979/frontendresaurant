import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

import { Updateproduct } from "./components/Updateproduct";
import { Register } from "./components/Register";
import { Login } from "./Login";
import { Infra } from "./components/Admin/Infra";


export function Router1(){
    return(
        <>
         <Routes>
       <Route path="/home" element={<Home/>}></Route>
       <Route path="/addinfra" element={<Infra/>}></Route>
       
       <Route path="/updateproduct" element={<Updateproduct/>}></Route>
       
       <Route path="/register" element={<Register/>}></Route> 
       <Route path="/login" element={<Login/>}></Route> 
            </Routes> 

        </>
    )
}