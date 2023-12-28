import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

import { Updateproduct } from "./components/Updateproduct";
import { Register } from "./components/Register";
import { Login } from "./Login";
import { Infra } from "./components/Admin/Infra";

import { Productcategory } from "./components/Admin/Productcategory";
import { Productcategoryitem } from "./components/Admin/Productdetail";
import { Maininfra } from "./components/Admin/Management/Maininfra";


export function Router1(){
    return(
        <>
         <Routes>
       <Route path="/home" element={<Home/>}></Route>
       <Route path="/addinfra" element={<Infra/>}></Route>
       
       <Route path="/addproduct" element={<Productcategory/>}></Route>
       <Route path="/productdetail" element={<Productcategoryitem/>}></Route>
       <Route path="/restaurantmanagement" element={<Maininfra/>}></Route>
       <Route path="/register" element={<Register/>}></Route> 
       <Route path="/login" element={<Login/>}></Route> 
            </Routes> 

        </>
    )
}