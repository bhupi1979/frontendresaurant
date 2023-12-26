
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Modelupdateproductcategory(props){
    
    const [editname,seteditname]=useState("")
    const [editslug,seteditslug]=useState("")
    
   useEffect(()=>{
    seteditname(props.updatedata.name)
       seteditslug(props.updatedata.slug)
     
//         var myModal = document.getElementById('exampleModal')


// myModal.addEventListener('shown.bs.modal', function () {
//   alert('model show')
//})
   },[])
  
    async function updateinfra(){

        
        
      
        // if(!editname ||editname==null)seteditname(props.updatedata.name)
        // if(!edittnumber||edittnumber==undefined)setedittnumber(props.updatedata.tnumber)
        // if(!editdescp||editdescp==undefined)seteditdescp(props.updatedata.descp)
        // if(!editrent||editrent==undefined) seteditrent(props.updatedata.rent)
        const fdata1={name:editname||props.updatedata.name,
                        slug:editslug||props.updatedata.slug
        }
        // if(editname===null || editname===undefined){fdata1.append('editname',props.updatedata.name)} else {fdata1.append('editname',editname)}
        // if(edittnumber===null|| editname===undefined) {fdata1.append('edittnumber',props.updatedata.tnumber)}else{ fdata1.append('edittnumber',edittnumber)}

        // if(editrent===null|| editrent===undefined){fdata1.append('editrent',props.updatedata.rent)}else{ fdata1.append('editrent',editrent)}

        // if(editdescp===null|| editdescp===undefined){ fdata1.append('editdescp',props.updatedata.editdescp)} else{ fdata1.append('editdescp',editdescp)}
        // fdata1.append('editname',editname||props.updatedata.name);
        // fdata1.append('editslug',editslug||props.updatedata.slug);
        
        alert("this is update alert "+props.updatedata._id)
           let result1= await fetch("https://backendrestaurant-i5ir.onrender.com/productcategory/"+props.updatedata._id,
           {
            method:"put",
        
            body:JSON.stringify(fdata1),
            headers:
            {
                "Content-Type":"Application/json"
            }
           })
           console.warn(result1)
           alert(result1.status)
           //result1= await result1.json()
          // console.warn(result1)
          if(result1.status==200){
            sessionStorage.setItem('edit',1)
            window.location.reload()
           }
           
           //document.getElementById('pformedit').reset()
        //    setmsg2("Data has been updated succeddfully")
        //            setTimeout(() => {
        //            setmsg2("")
                   
        //             }, 5000)
           
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
                        <input className="form-control mt-1" type="text" name="editname" defaultValue={props.updatedata.name}  onChange={(e)=>{seteditname(e.target.value)}} placeholder="Enter name"></input>
                        <input className="form-control mt-1" type="text" name="editslug" defaultValue={props.updatedata.slug}   onChange={(e)=>{seteditslug(e.target.value)}} placeholder="Enter slug"></input>
                        <button type="submit" className="btn btn-warning" onClick={updateinfra} data-bs-dismiss="modal">Update-product-category</button>
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