import { useEffect, useRef, useState } from "react";

import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import { useReactToPrint } from "react-to-print";
import { Modelupdate } from "./Modelupdate";
import { Navbar } from "../../Navbar";

export function Infra()
{       const [errors, setErrors] = useState({});
  
            const [searchQuery, setSearchQuery] = useState('');
            const[data,setresult]=useState([])
        const[msg2,setmsg2]=useState("")
        const[updatedata,setupdatedata]=useState([])
        const [name,setname]=useState("")
        const [tnumber,settnumber]=useState("")
        const [rent,setrent]=useState("")
        const[descp,setdescp]=useState("")
            async function addinfra()
            {
        //const componentRef=useRef()
            if (validateForm()) {
                            alert(name+descp)
                            
                            const fdata=new FormData()
                            
                            fdata.append('name',name)
                            fdata.append('descp',descp)
                            fdata.append('tnumber',tnumber)
                            fdata.append('rent',rent)
                            let result= await fetch("https://backendrestaurant-i5ir.onrender.com/addinfra",
                            {
                                method:"POST",
                                body:fdata,
                                headers:{ 'Content-Type':'Application/json'}
                            })
                            
                        
                            console.warn(result)
                            alert(result.status)
                            if(result.status==201){
                            setname("")
                            settnumber("")
                            setrent("")
                            setdescp("")
                            
                            setmsg2("Data has been uploaded succeddfully")
                                    setTimeout(() => {
                                    setmsg2("")
                                    
                                    }, 1000)
                                    }
                                    window.location.reload()
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

        let result=  await fetch("https://backendrestaurant-i5ir.onrender.com/infra",
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
       
       
     },[])
     /******for fileter function */
     const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      /********for filter */
  //**********column for datatable */
      const columns = [
        {
          name: 'ID',
          cell:(row,i=1)=>(++i)
          
        },
        {
          name: 'Name',
          selector: (row)=>row.name,
          sortable: true,
        },
        {
          name: 'Total-Nos',
          selector: (row)=>row.tnumber,
          sortable: true,
        },
        {
          name: 'Rent',
          selector: (row)=>row.rent,
          sortable: true,
        },
            {
          name: 'Description',
          selector: (row)=>row.descp,
          sortable: true,
        },
        {
          name: 'Action',
          cell:(row)=>(<button onClick={() => setEditId(row.id) } data-bs-toggle="modal" data-bs-target="#exampleModal"><span  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit Row">
          <svg className="tooltip" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg></span></button>)
          
        },
        {
            name: 'Action',
            cell:(row)=>( <span  onClick={() => handleDelete(row.id)}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="delete Row" >
            <svg xmlns="http://www.w3.org/2000/svg"   width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"  data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Row" >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
            </svg></span>
        )
            
          }
      ];
      /***********columns for reactdatatblecomponnet */
      /*********for print only */
      const componentRef = useRef(null);
      //end of listing data************
      //alert(componentRef)
      const handlePrint1 = useReactToPrint({
        
        content: () =>componentRef.current
      });
/**********end of print only** */

//**************** for pdf ********generate table*/
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
        head: [['ID', 'Name', 'Total-no','RENT','Description']],
        body: data.map(row => [row.id, row.name, row.tnumber,row.rent,row.descp]),
        startY: 10,
        
      });
    
      pdf.save('exported.pdf');
    },
  });
//*********end of print table */

  /**************delete operation startss here */
  /*****************************************/
  const handleDelete = async (id) => {
    // Implement your delete logic here
    //console.log(`Delete item with ID ${id}`);
   let cs1=confirm("Are YOu sure to delete the row")
  if(cs1){
    let result=await fetch("http://127.0.0.1:8000/api/deleteinfra/"+id,
  {
  method:"GET",
  headers:
  {
      "Content-Type":"application/json"
  }
})
console.log(result)
window.location.reload()
}

  };
/*********Delete Operation */

/***********single row edit function*******/
/****************************** */
function setEditId(id){
//alert('in edit click id'+ id +updatedata)
const asyncFn1 = async () =>  { 
  // alert('onetwoeth**'+id)
   let result=  await fetch("http://127.0.0.1:8000/api/singleinfra/"+id,
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
  //*********single edit row ends */
/****************************** */
/********** */
/***********VALIDATION */
const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Name Validation
    if (!name.trim()) {
      isValid = false;
      newErrors.name = 'Name is required';
    }
    if (!tnumber.trim()) {
        isValid = false;
        newErrors.tnumber = 'tnumber is required';
      }
      if (!rent.trim()) {
        isValid = false;
        newErrors.rent = 'rent is required';
      }
      
      if (!descp.trim()) {
        isValid = false;
        newErrors.descp = 'descp is required';
      }
    setErrors(newErrors)
        return isValid
}
/********validatio ends herer */
    return(
        <>
    
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <h1>ADD INFRA</h1>
                        <h3 >{msg2}</h3>
                        
                    <form className="form-control" id="pform" method="post" onSubmit={(e)=>{e.preventDefault()}}>
                        <input className="form-control mt-1" type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter name"></input>
                        {errors.name && <span>{errors.name}</span>}
                        <input className="form-control mt-1" type="number" name="tnumber" value={tnumber} onChange={(e)=>{settnumber(e.target.value)}} placeholder="Enter Number"></input>
                        {errors.tnumber && <span>{errors.tnumber}</span>}
                        <input className="form-control mt-1" type="number" name="rent" value={rent} onChange={(e)=>{setrent(e.target.value)}} placeholder="Enter rent"></input>
                        {errors.rent && <span>{errors.rent}</span>}
                        <textarea className="form-control mt-1 mb-2" name="descp" value={descp} onChange={(e)=>{setdescp(e.target.value)}} placeholder="Enter Description"></textarea>
                        {errors.descp && <span>{errors.descp}</span>}
                        <br/>
                        <button type="submit" className="btn btn-primary" onClick={addinfra}>Add-infra</button>
                    </form>
                    </div>
                    <div className="col-lg-7">
                        <h1 className="text-center">The Infra Detail</h1>
                        <CSVLink data={data} filename={"data.csv"}>
                        <button>ExportCSV</button>
                    </CSVLink>
                    <button onClick={handlePrint}>ExportPdf</button>

                    <button onClick={handlePrint1}>PRint</button>
                        {data
                        ?
                        <div style={{ display: 'block' }} ref={componentRef} >
      
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


{/* model */}
<Modelupdate updatedata={updatedata}/>
        </>
    )
}