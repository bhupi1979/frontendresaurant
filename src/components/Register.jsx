import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Register(){
    const[formdata,setformdata]=useState({
        name:"",
        email:"",
        password:""
    })
     const [errors, setErrors] = useState({});
    // const [name,setname]=useState("")
    // const [email,setemail]=useState("")
    // const [password,setpassword]=useState("")
    const history=useNavigate()
    useEffect(()=>{
      if(sessionStorage.getItem('mainsession'))
      history('/home')
    },[])
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Name Validation
        if (!formdata.name.trim()) {
          isValid = false;
          newErrors.name = 'Name is required';
        }
    
        // Number Validation
        // const numberRegex = /^[0-9]*$/;
        // if (!formData.number.trim() || !numberRegex.test(formData.number)) {
        //   isValid = false;
        //   newErrors.number = 'Please enter a valid number';
        // }
    
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
    
        // Gender Validation
        // if (!formData.gender) {
        //   isValid = false;
        //   newErrors.gender = 'Gender is required';
        // }
    
        // // Agreement Checkbox Validation
        // if (!formData.agree) {
        //   isValid = false;
        //   newErrors.agree = 'You must agree to the terms';
        // }
    
        // // File Input Validation
        // if (!formData.file) {
        //   isValid = false;
        //   newErrors.file = 'Please select a file';
        // }
        // if (!formData.feedback) {
        //     isValid = false;
        //     newErrors.feedback = 'Feedback is required';
        //   }
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
    const sbmit= async (e)=>{
        e.preventDefault();

        if (validateForm()) {
        let result= await fetch('https://backendrestaurant.vercel.app/register',
        {
            method:'post',
            body:JSON.stringify(formdata),
            headers:{ 'Content-Type':'Application/json'}
        })
        result=await result.json()
        console.warn(result)
       sessionStorage.clear()
        sessionStorage.setItem('registerthrough',1)
        history('/login')
    }
}
const gotologin=()=>{
 // sessionStorage.setItem('register1',1)
  sessionStorage.clear()
  history("login")
}
    return(
     <>
         <h1 className="text-center">welcome to Register page</h1>
         <div className="container">
         <div className="row">
         <div className=" offset-lg-3 col-lg-6">
         <form onSubmit={sbmit} className="border-4 form-control">
            <input type="text"  className="form-control mb-2" name="name" value={formdata.name} onChange={handleChange} placeholder="Enter Name" />
            {errors.name && <span>{errors.name}</span>}
            <input type="email"  className="form-control mb-2" name="email"  value={formdata.email} placeholder="Enter Email" onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
            <input type="password"  className="form-control mb-2" name="password" value={formdata.password} placeholder="Enter password" onChange={handleChange}/>
            {errors.password && <span>{errors.password}</span>}
            <br/>
            <button className="btn btn-primary" type="submit" >Submit</button>
            <br/>
            <span style={{color:"red",cursor:"pointer"}} onClick={gotologin}>If Already Register..Click here</span>

         </form>
         </div>
         </div>
         </div>
     </>
    )
}