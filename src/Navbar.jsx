import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export function Navbar(){
  const history=useNavigate()
 
  const exit1=()=>{
    sessionStorage.clear()
    history('/login')
  }
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='border border-2 rounded-5' src='/src/components/img/logo1.png' alt="image" width={'70px'} height={'70px'}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to='/home'>  <a className="nav-link active" aria-current="page" >Home</a></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/addproduct"><a className="nav-link" >AddProduct</a></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/updateproduct"><a className="nav-link" href="#">UpdateProduct</a></NavLink>
        </li>
       
        <li className="nav-item" onClick={exit1}>
          <NavLink to="/Logout"><a className="nav-link" href="#">Log-Out</a></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile"><a className="nav-link lastchild" href="#">Welcome**{sessionStorage.getItem('user')}</a></NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/register"><a className="nav-link lastchild" href="#">Sign-up</a></NavLink>
        </li> */}
      </ul>
     
    </div>
  </div>
</nav>
        </>
    )
}
