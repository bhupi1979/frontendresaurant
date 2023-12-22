import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Addproduct } from "./components/Addproduct";
import { Updateproduct } from "./components/Updateproduct";
import { Register } from "./components/Register";
import { Login } from "./Login";

export function Router1(){
    return(
        <>
         <Routes>
       <Route path="/home" element={<Home/>}></Route>
       <Route path="/addproduct" element={<Addproduct/>}></Route>
       
       <Route path="/updateproduct" element={<Updateproduct/>}></Route>
       
       <Route path="/register" element={<Register/>}></Route> 
       <Route path="/login" element={<Login/>}></Route> 
            </Routes> 

        </>
    )
}