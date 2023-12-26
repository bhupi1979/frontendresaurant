import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useReactToPrint } from "react-to-print";

import { CSVLink } from "react-csv";
import DataTable from "react-data-table-component";
import { Modelupdateproductcategory } from "./Modelupdateproductcategory";
import jsPDF from 'jspdf';
import 'jspdf-autotable'

export function Productcategory(){
    const [errors, setErrors] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const[data,setresult]=useState([])
const[msg2,setmsg2]=useState("")
const[updatedata,setupdatedata]=useState([])
const [name,setname]=useState("")
const [slug,setslug]=useState("")
async function addproductcategory(){
    //const componentRef=useRef()
    if (validateForm()) {
            alert(name+slug)
         const fdata={name:name,slug:slug}
            // fdata.append('name',name)
            // fdata.append('slug',slug||document.getElementById('slug').value)
           
               let result= await fetch("https://backendrestaurant-i5ir.onrender.com/productcategoryadd",
               {
                method:"post",
                body:JSON.stringify({name,slug}),
                headers:{ 'Content-Type':'Application/json'}
               })
               
           
               console.warn(result)
               alert(result.status)
               if(result.status==200){
               setname("")
               setslug("")
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
    
            let result=  await fetch("https://backendrestaurant-i5ir.onrender.com/showproductcategory",
            {
            method:"GET",
            headers:
            {
                "Content-Type":"application/json"
            }
        })
        result= await result.json()
        //alert(result)
        setresult(result)
        console.warn('result',result)
        console.log(result)
        
         }
         asyncFn();
         if(sessionStorage.getItem('edit')==1)
         {setmsg2("Data updated successfuly")
          setTimeout(() => {
            setmsg2("")
            sessionStorage.setItem('edit',0)
          }, 2000);
         }
           
         },[])
         const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
      
          const columns = [
            {
              name: 'ID',
              selector: (row)=>row.id,
              cell:(row,i=1)=>(++i)
            },
            {
              name: 'Name',
              selector: (row)=>row.name,
              sortable: true,
            },
            {
              name: 'Slug',
              selector: (row)=>row.slug,
              sortable: true,
            },
           
            {
              name: 'Action',
              cell:(row)=>(<button onClick={() => setEditId(row._id) } data-bs-toggle="modal" data-bs-target="#exampleModal"><span  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit Row">
              <svg className="tooltip" xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg></span></button>)
              
            },
            {
                name: 'Action',
                cell:(row)=>( <span  onClick={() => handleDelete(row._id)}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="delete Row" >
                <svg xmlns="http://www.w3.org/2000/svg"   width="30" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"  data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Row" >
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
            head: [['ID', 'Name',"Slug"]],
            body: data.map(row => [row.id, row.name, row.slug]),
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
        let result=await fetch("https://backendrestaurant-i5ir.onrender.com/productcategory/"+id,
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
       let result=  await fetch("https://backendrestaurant-i5ir.onrender.com/singleproductcategory/"+id,
       {
       method:"get",
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
   
    setErrors(newErrors)
        return isValid
}
/*********validation ends herer */
/*********custom styles for rows datatable */
const customStyles = {
  headCells: {
    style: {
       fontSize:'26px',
       color:'black',
       backgroundColor:"#fefefe"
    },
},
  rows: {
    style: {
      fontSize: '20px', // Set text size for all rows
      color:'#800000',
      backgroundColor:'lightblue'
    },
  },
};



    return(
        <>
    
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <h1>Product-category</h1>
                        <h3 style={{color:'red',background:'yellow'}} className="text-center">{msg2}</h3>
                        
                    <form className="form-control" id="pform" method="post" onSubmit={(e)=>{e.preventDefault()}}>
                        <input className="form-control mt-1" type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} onBlur={()=>{setslug(`${name}-slug`)}} placeholder="Enter name"></input>
                        {errors.name && <span>{errors.name}</span>}
                        <input className="form-control mt-1" type="text" id="slug" name="slug" value={slug} onChange={(e)=>{setslug(e.target.value) }} placeholder="Enter slug"></input>
                        {/* <input className="form-control mt-1" type="text" name="rent" value={rent} onChange={(e)=>{setrent(e.target.value)}} placeholder="Enter rent"></input>
                        <textarea className="form-control mt-1 mb-2" name="descp" value={descp} onChange={(e)=>{setdescp(e.target.value)}} placeholder="Enter Description"></textarea>*/}
                        <button type="submit" className="btn btn-primary mt-2 w-100" onClick={addproductcategory}>Add-Product-category</button> 
                    </form>
                    </div>
                    <div className="col-lg-7">
                        <h1 className="text-center">The Product-Category_Detail</h1>
                        <CSVLink data={data} filename={"data.csv"}>
                        <button className="p-1">ExportCSV</button>
                    </CSVLink>
                    <button className="p-1" onClick={handlePrint}>ExportPdf</button>

                    <button className="p-1" onClick={handlePrint1}>PRINT</button>
                        {data?<div style={{ display: 'block' }} className="border border-4 border-danger" ref={componentRef} >
      
      <DataTable
        
        columns={columns}
        data={filteredData}
        striped
        highlightOnHover
        pointerOnHover
        pagination
        subHeader
        customStyles={customStyles}
        
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


{/* model */}
<Modelupdateproductcategory updatedata={updatedata}/>
        </>
    )
}