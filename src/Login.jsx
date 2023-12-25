import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export function Login(){
    const[formdata,setformdata]=useState({
        name:"",
        email:"",
        password:""
    })
    const [errors, setErrors] = useState({});
    const[msg,setmsg]=useState("")
    const history=useNavigate()
    useEffect(()=>{
      if(sessionStorage.getItem('mainsession'))
      history('/home')
    if(sessionStorage.getItem('registerthrough'))
    {
    setmsg("YOU ARE SUCCESSFULLY REGISTER..PLease Login")
    setTimeout(() => {
      setmsg("")
    }, 2000);
    }
    },[])
   const sbmit= async(e)=>{
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here
      let result= await fetch('https://backendrestaurant-i5ir.onrender.com/login',
      {
          method:'post',
          
          body:JSON.stringify(formdata),
          headers:{ 'Content-Type':'Application/json'}
      })
      result=await result.json()
      alert(result.resultuser)
      if(result.resultuser)
      {
      console.log('Form is valid. Submitting:', formdata);
      sessionStorage.setItem('mainsession',1)
      sessionStorage.setItem('user',formdata.name)
      history('/home')
      }
      else{
      setmsg("user password not matched")
      setTimeout(() => {
        setmsg("")
      }, 2000);
      }
    } else {
      console.log('Form is invalid. Please correct errors.');
      
    }
   }
   const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Name Validation
    if (!formdata.name.trim()) {
      isValid = false;
      newErrors.name = 'Name is required';
    }

        // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formdata.email.trim() || !emailRegex.test(formdata.email)) {
      isValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    // Password Validation
    if (formdata.password.length < 6) {
      isValid = false;
      newErrors.password = 'Password must be at least 6 characters long';
    }

    
    setErrors(newErrors);
    return isValid;
  };

   const handleChange = (e) => {
    const { name, value } = e.target;
     setformdata({
        ...formdata,
        [name]: value,
      });

  };
  const gotoregister=()=>{
    sessionStorage.setItem('register1',1)
    
    history("register")
  }
    return(
     <>
     
         <h1 className="text-center">welcome to Login page</h1>
         <div className="container">
         <div className="row">
         <div className="msg text-center">{msg}</div>
         <div className=" offset-lg-3 col-lg-6">
         <form onSubmit={sbmit} className="border-4 form-control">
            <input type="text"  className="form-control mb-2" name="name" value={formdata.name} onChange={handleChange} placeholder="Enter Name" />
            {errors.name && <span>{errors.name}</span>}
            <input type="email"  className="form-control mb-2" name="email"  value={formdata.email} placeholder="Enter Email" onChange={handleChange}  />
            {errors.email && <span>{errors.email}</span>}
            <input type="password"  className="form-control mb-2" name="password" value={formdata.password} placeholder="Enter password" onChange={handleChange} />
            {errors.password && <span>{errors.password}</span>}
            <br/>
            <button className="btn btn-primary" type="submit" >Submit</button>
            <br/>
            <span style={{color:"red",cursor:"pointer"}} onClick={gotoregister}>If not Register..Click here</span>
         </form>
         </div>
         </div>
         </div>
     </>
    )
}