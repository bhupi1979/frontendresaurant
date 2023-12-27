import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export function Modelpitem(props){
    
    const [editname,seteditname]=useState("")
    const [editprice,seteditprice]=useState("")
    const [editimg,seteditimg]=useState("")
    const [editdescp,seteditdescp]=useState("")
    const [editpcategory,seteditpcategory]=useState("")
    const [datapitemedit,seteditpitem]=useState([])
    
   useEffect(()=>{
    //alert(props.updatedatat1.name)
    seteditname(props.updatedata1.name)
       seteditprice(props.updatedata1.price)
       seteditimg(props.updatedata1.image)
       seteditdescp(props.updatedata1.descp)
       
       console.log(props.updatedata1.image)
     
       const asyncFn1 = async () => {
        let resultpitemedit=  await fetch("https://backendrestaurant-i5ir.onrender.com/showproductcategory",
        {
        method:"GET",
        headers:
        {
            "Content-Type":"application/json"
        }
        })
        resultpitemedit= await resultpitemedit.json()
        //alert(resultpitemedit)
        seteditpitem(resultpitemedit)
        console.warn('result1',resultpitemedit)
        console.log(resultpitemedit)
        
        }
        asyncFn1();
   },[])
  
    async function updatepitem(){
       const fdata1=new FormData()
       fdata1.append('editname',editname||props.updatedata1.name);
        fdata1.append('editprice',editprice||props.updatedata1.price);
        fdata1.append('editimg',editimg||props.updatedata1.image);
        fdata1.append('editdescp',editdescp||props.updatedata1.descp);
        fdata1.append('editpcategory',editpcategory ||props.updatedata1.pcategory)
        alert("this is update alert"+props.updatedata1._id)
           
        
        let result1= await axios.put(`https://backendrestaurant-i5ir.onrender.com/productdetail/${props.updatedata1._id}`,
        fdata1
          //  {
          //      method:"PUT",
              
          //     body:fdata1,
             
          //  }
          )
           console.warn(result1)
           
           alert(result1.status)
          
    
           window.location.reload()
           
              }
   
    return(
        <>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
              <h1>Update Product category</h1>

      <form className="form-control" id="pformedit" method="post" onSubmit={(e)=>{e.preventDefault()}}>
      <select className="w-100 mt-1" name="editpcategory"  onChange={(e)=>{seteditpcategory(e.target.value)}} ><option value={0}>SELECT-CATEGORY</option>
                    {datapitemedit.map((item,id)=>(<option selected={props.updatedata1.pcategory==item._id ? true:null} value={item._id} >{item.name}</option>))}
                    </select>
                        <input className="form-control mt-1" type="text" name="editname" defaultValue={props.updatedata1.name}  onChange={(e)=>{seteditname(e.target.value)}} placeholder="Enter name"></input>
                        <input className="form-control mt-1" type="text" name="editprice" defaultValue={props.updatedata1.price}   onChange={(e)=>{seteditprice(e.target.value)}} placeholder="Enter slug"></input>
                        <input className="form-control mt-1" type="file" name="editimg"    onChange={(e)=>{seteditimg(e.target.files[0])}} placeholder="upload image"></input>
                        <textarea className="form-control mt-1 mb-2" name="editdescp"  defaultValue={props.updatedata1.descp} onChange={(e)=>{seteditdescp(e.target.value)}} placeholder="Enter Description"></textarea>

                        <button type="submit" className="btn btn-warning" onClick={updatepitem} data-bs-dismiss="modal">Update-product-category</button>
                    </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}