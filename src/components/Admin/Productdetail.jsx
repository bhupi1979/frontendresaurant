import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useReactToPrint } from "react-to-print";

import { CSVLink } from "react-csv";
import DataTable from "react-data-table-component";
import { Modelupdateproductcategory } from "./Modelupdateproductcategory";
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import { Modelpitem } from "./Modelproductdetail";
//import { Modelpitem } from "./Modelpitem";
export function Productcategoryitem(){
    const [searchQuery, setSearchQuery] = useState('');
    const[data,setresult]=useState([])
    const[datapitem,setresultpitem]=useState([])
const[msg2,setmsg2]=useState("")
const[updatedata,setupdatedata]=useState([])
const [name,setname]=useState("")
const [image,setimg]=useState("")
const [price,setprice]=useState("")
const [descp,setdescp]=useState("")
const [pcategory,setpcategory]=useState("")
const [errors, setErrors] = useState({});

let resultpitem
async function addproductcategoryitem(){
    
            
            //const fdata={name:name,price:price,image:image,descp:descp,pcategory:pcategory}
            if (validateForm()) {
            const fdata=new FormData()
            fdata.append('name',name)
             fdata.append('price',price)
             fdata.append('image',image)
             fdata.append('descp',descp)
             fdata.append('pcategory',pcategory)
           
               let result= await fetch("https://backendrestaurant-i5ir.onrender.com/productdetail",
               {
                method:'post',
            
                body:fdata

               })
               
           
               console.warn(result)
               alert(result.status)
               if(result.status==200){
               setname("")
               setimg("")
               setprice("")
               setdescp("")
               setpcategory("")
              
               
               setmsg2("Data has been uploaded succeddfully")
                       setTimeout(() => {
                       setmsg2("")
                       window.location.reload()
                       }, 1000)
                    }
                    
                 }
                }
    
          //*****************for listion of infra list section of get method of table data */       
          useEffect(()=>{const asyncFn = async () => {  
    
    //javscript for tooltip********//
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map((tooltipTriggerEl) => {
          return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    //**********javascrp for tooltip ends her */
    //THis is all product item show
            let result=  await fetch("https://backendrestaurant-i5ir.onrender.com/showproductdetail",
            {
            method:"GET",
            headers:
            {
                "Content-Type":"application/json"
            }
        })
        result= await result.json()
       // alert(result)
        setresult(result)
        console.warn('result',result)
        console.log(result)
        
         }
         asyncFn();
           /***********this is all productshow */

//THis is all product item show
const asyncFn1 = async () => {
     resultpitem=  await fetch("https://backendrestaurant-i5ir.onrender.com/showproductcategory",
    {
method:"GET",
headers:
{
    "Content-Type":"application/json"
}
})
resultpitem= await resultpitem.json()
//alert(resultpitem)
setresultpitem(resultpitem)
console.warn('result',resultpitem)
console.log(resultpitem)

}
asyncFn1();

           
         },[])
         const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          const getProductCategoryName = (id) => {
            const category = datapitem.find(item => item._id === id);
            return category ? category.name : "Unknown Category";
          }
          const columns = [
            {
              name: 'ID',
              cell:(row,i=1)=>(++i)
            },
            {
              name: 'Product-Category',
              cell:(row)=>getProductCategoryName(row.pcategory),
              sortable: true,
            },
            {
              name: 'Name',
              selector: (row)=>row.name,
              sortable: true,
            },
            {
              name: 'price',
              selector: (row)=>row.price,
              sortable: true,
            },
            {
                name:'Description',
                selector: (row)=>row.descp,
                sortable: true,
              },
              {
                name: 'Image',
                cell:(row)=>(<img src={`https://backendrestaurant-i5ir.onrender.com/uploads/${row.image}`} alt="img" width={'100rem'} height={'100rem'}/>),
                sortable: true,
              },
            {
              name: 'Action',
              cell:(row)=>(<button onClick={() => setEditId(row._id) } data-bs-toggle="modal" data-bs-target="#exampleModal"><span  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit Row">
              <svg className="tooltip" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg></span></button>)
              
            },
            {
                name: 'Action',
                cell:(row)=>( <span  onClick={() => handleDelete(row._id)}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="delete Row" >
                <svg xmlns="http://www.w3.org/2000/svg"   width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"  data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Row" >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg></span>
            )
                
              }
          ];
          const componentRef = useRef(null);
          //end of listing data************
          //alert(componentRef)
          const handlePrint1 = useReactToPrint({
            
            content: () =>componentRef.current
          });
    /************ */
    
    //**************** for pdf*/
    
    
      const handlePrint= useReactToPrint({
        content: () => componentRef.current,
        pageStyle: `
          @page {
            size: A4;
            margin: 0.2cm;
          }
        `,
        documentTitle: 'DataTable Export',
        print: () => {
          const pdf = new jsPDF();
          //const tableContent = document.getElementById('dataTable').outerHTML
    
          pdf.text('Product-LIst', 80, 5);
        
    
          pdf.autoTable({
            head: [['ID', 'Name',"price"]],
            body: data.map(row => [row.id, row.name, row.price]),
            startY: 10,
            
          });
        
          pdf.save('exported.pdf');
        },
      });
      const handleDelete = async (id) => {
        // Implement your delete logic here
        //console.log(`Delete item with ID ${id}`);
       let cs1=confirm("Are YOu sure to delete the row")
      if(cs1){
        let result=await fetch("https://backendrestaurant-i5ir.onrender.com/productdetail/"+id,
      {
      method:"delete",
      headers:
      {
          "Content-Type":"application/json"
      }
    })
    console.log(result)
    window.location.reload()
    }
    
      };
    /*********MODAL */
    
    /***********single row edit */
    function setEditId(id){
    //alert('in edit click id'+ id +updatedata)
    const asyncFn1 = async () =>  { 
      // alert('onetwoeth**'+id)
       let result=  await fetch("https://backendrestaurant-i5ir.onrender.com/singleproductdetail/"+id,
       {
       method:"GET",
       headers:
       {
           "Content-Type":"application/json"
       }
    })
    result= await result.json()
    
    //alert(result.name)
    setupdatedata(result)
    //alert(result123.name)
    console.warn('result',result)
    console.log(result)
    
    }
    asyncFn1()
    }
      
/***********validataion  */
const validateForm = () => {
  let isValid = true;
  const newErrors = {};

  // Name Validation
  if (!name.trim()) {
    isValid = false;
    newErrors.name = 'Name is required';
  }
  if (!pcategory) {
    isValid = false;
    newErrors.pcategory = 'category is required';
  }
  if (!price.trim()) {
    isValid = false;
    newErrors.price = 'Price is required';
  }
  if (!image) {
    isValid = false;
    newErrors.image = 'image is required';
  }
  if (!descp.trim()) {
    isValid = false;
    newErrors.descp = 'Description is required';
  }

  setErrors(newErrors)
      return isValid
}
/*********validation ends herer */




    return(
        <>
            
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <h1 className="text-uppercase">Product category ITEM</h1>
                        <h3 style={{color:'red',background:'yellow'}} className="text-center">{msg2}</h3>
 
                    <form className="form-control" id="pform" method="post" onSubmit={(e)=>{e.preventDefault()}}>
                    <select className="w-100 mt-1" name="pcategory"  onChange={(e)=>{setpcategory(e.target.value)}} ><option value={0}>SELECT-CATEGORY</option>SELECT-CATEGORY 
                    {datapitem.map((item,id)=>(<option value={item._id}>{item.name}</option>))}
                    </select>
                    {errors.pcategory && <span>{errors.pcategory}</span>}
                        <input className="form-control mt-1" type="text" name="name"  onChange={(e)=>{setname(e.target.value)}}  placeholder="Enter name"></input>
                        {errors.name && <span>{errors.name}</span>}
                        <input className="form-control mt-1" type="number" id="price" name="price"  onChange={(e)=>{setprice(e.target.value) }} placeholder="Enter Price"></input>
                        {errors.price && <span>{errors.price}</span>}
                        <input className="form-control mt-1" type="file" name="image"  onChange={(e)=>{setimg(e.target.files[0]) }} placeholder="Enter a image"/>
                        {errors.image && <span>{errors.image}</span>}
                        {/* <input className="form-control mt-1" type="text" name="rent" value={rent} onChange={(e)=>{setrent(e.target.value)}} placeholder="Enter rent"></input>*/}
                        <textarea className="form-control mt-1 mb-2" name="descp" value={descp} onChange={(e)=>{setdescp(e.target.value)}} placeholder="Enter Description"></textarea>
                        {errors.descp && <span>{errors.descp}</span>}
                        <br/>
                        <button type="submit" className="btn btn-primary mt-2 w-100" onClick={addproductcategoryitem}>Add-Product-item-detail</button> 
                    </form>
                    </div>
                    <div className="col-lg-7">
                        <h1 className="text-center text-uppercase">The Product Category ITem Detail</h1>
                        <CSVLink data={data} filename={"data.csv"}>
                        <button className="p-1">ExportCSV</button>
                    </CSVLink>
                    <button className="p-1" onClick={handlePrint}>ExportPdf</button>

                    <button className="p-1" onClick={handlePrint1}>PRint</button>
                        {data?<div style={{ display: 'block' }} ref={componentRef} >
      
      <DataTable
        
        columns={columns}
        data={filteredData}
        striped
        highlightOnHover
        pointerOnHover
        pagination
        subHeader
        subHeaderComponent={
          <input
          width="10rem"
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
        }
        
      />
      
    </div>:<h1>"There is no record to display"</h1>}
                    </div>
                </div>
            </div>
            {/* <!-- Button trigger modal --> */}



 { <Modelpitem updatedata1={updatedata}/>  }
        </>
    )
}