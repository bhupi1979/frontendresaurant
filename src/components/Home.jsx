import { useState } from "react"
import { TailSpin } from "react-loader-spinner"
import jsPDF from "jspdf"
export function Home(){
    const [pdate,setpdate]=useState("")
    const [ndate,setndate]=useState("")
    const [data,setresult]=useState([])
    const [isloading,setisloading]=useState(false)
    const [isdata,setisdata]=useState(false)
    let [k,setk]=useState(0)
    let filteredResults 
    
    let i=0
    let j=0
  
   
    const HandleClick=(e)=>
    {   
        
        e.preventDefault()
        
        const d1 = new Date(pdate);
    const d2 = new Date(ndate)
    //alert(pdate)
    if(!pdate||!ndate)
    {   if(!pdate)
        alert(` please selectdate from`)
         if(!ndate)
         alert(` please selectdate TO`)
    }
        else if(d1>=d2)
        {
            alert("Please select first date previous to next date input")
        }
          
        else
        {
            setisloading(true)
            const asyncFn = async () => {
                let result=  await fetch(`https://backendrestaurant-i5ir.onrender.com/managementsale`,
                    {
                    method:"get",
                    
                    headers:
                    {
                        "Content-Type":"application/json"
                    }
                })
           
                result= await result.json()
                 filteredResults =  result.filter(item =>  (new Date(item.datestr)>=d1 && new Date(item.datestr)<=d2))
               
                setresult(filteredResults)
                console.warn('result',filteredResults)
                console.log(filteredResults)
                setisdata(true)
        setisloading(false)
        //alert(data.length)
            }
               
                
                asyncFn();

        }

    }
    
    const printpdf=()=>{
    let strnew=[]
    let y=0
   //new jsPDF('p', 'mm', 'a4')
   let doc =  new jsPDF({
              unit: "mm",
          format:"A4"
          })
        if(data)
        {

        
        
          doc.setFontSize(20)
          doc.text("Saksham Restaurant",75,20);
          doc.line(1,21,210,21)
          doc.setFontSize(14)
          const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

const pformattedDate = new Date(pdate).toLocaleDateString('en-US', options);
         let pstr=pformattedDate.substring(0,10)
         let pstr2=pformattedDate.substring(11,pformattedDate.length)
         pstr=pstr.split("/")
         pstr=`${pstr[1]}/${pstr[0]}/${pstr[2]}`
const nformattedDate = new Date(ndate).toLocaleDateString('en-US', options);
let nstr=nformattedDate.substring(0,10)
let nstr2=nformattedDate.substring(11,nformattedDate.length)
nstr=nstr.split("/")
nstr=`${nstr[1]}/${nstr[0]}/${nstr[2]}`
      doc.text(`Sales Report  from ${ pstr }${pstr2} to ${ nstr }${nstr2}`,5,27)
      //data.forEach(myfunction)
     
            data.forEach((item)=>{
        
       strnew.push(item.str)
   
    
        })
       
        y++
        //alert("mainstrnew"+strnew.length)
        for ( j=0;j<strnew.length;j++)
        { 
            
            doc.line(1,35+y,210,35+y)
            y=y+5
            doc.text(`MODE:-${strnew[j].split('!')[0]}`,75,35+y)
            y=y+5
            doc.line(1,35+y,210,35+y)
            let gtotal=strnew[j].split('!')[1].split('(')[1]
            let str=(strnew[j].split('!')[1].split('(')[0].split(')'))
            const itemNameX = 5;
            const priceX = 80;
            const qtyX = 120;
            const totalAmountX =180;
        
            // Add column titles
            y=y+5


          
            doc.text("Item-name", itemNameX, 35+y);
            doc.text("Price", priceX, 35+y);
            doc.text("Qty", qtyX, 35+y);
            doc.text("Amount", totalAmountX, 35+y);
            y=y+8
           // alert(str.length)
             for(i=0;i<str.length;i++)
             {
                doc.text(str[i].split('^')[1], itemNameX, 35+y);
                doc.text(str[i].split('^')[2], priceX, 35+ y);
                doc.text(str[i].split('^')[3], qtyX,35+y);
                doc.text(str[i].split('^')[4], totalAmountX, 35+y);
          
                y+= 8; // Adjust the vertical position for the next item
                if((y)>250)
                {doc.addPage()
                   y=0
                }
             }
             doc.line(1,35+y,210,35+y)
             y=y+5
             doc.text(`Grandtoal:-${gtotal}`,155,35+y)
             y=y+5
             doc.line(1,35+y,210,35+y)
             
        }
       
       }
       else{
      //  alert('nodata')
           doc.text("There is not data to be display between selected text",5,10)
       }
       const pdfBlob = doc.output("blob");
          
       // Create a data URI for the Blob
       const pdfDataUri = URL.createObjectURL(pdfBlob);
       
       // Open a new window with the PDF data URI for printing
       const printWindow = window.open(pdfDataUri);
       printWindow.print()
      
    }
    //    function myfunction(item,index){
    //     doc.text(`MODE:- ${ item.str.split('!')[0] }`,70,28+y)
    //     doc.line(1,28+y+1,210,28+y+1)
    //    doc.text("ITEM_NAME",5,28+y+1+1)
    //    (item.str.split('!')[1].split('(')[0].split(')')).forEach(pitem)
    //    doc.line(1,28+y+1,210,28+y+1)
    //    y++
     
    // } 
    //        function pitem(item,index){
    //         doc.text(` ${ pitem.str.split('!')[0] }`,5,28+y+1+1+1)
    //             y++
           
              // Loop through the items and add them to the document
              
          //doc.save("two-by-four.pdf");

              
            
       return(
        <>
        <h1 className="text-center">welcome to Saksham Restaurant</h1>

        <div className="container">
                <div className="row">                 
                 <div className="col-lg-8">
                 <h3>*******SALES REPORT*********</h3>
                 <form className="form-control">
                                  <span>ENTER DATE FROM</span>
                            <input className="form-control" type="datetime-local" name="pdate" id="pdate" placeholder="Enter date from" value={pdate} onChange={(e)=>{setpdate(e.target.value)}}/>
                            <br/><br/>
                           <span>ENTER DATE TO</span>
                            <input className="form-control" type="datetime-local" name="ndate" id="ndate" placeholder="Enter date to" value={ndate} onChange={(e)=>{setndate(e.target.value)}}/>
                            <br/><br/>
                             <button type="submit" className="btn btn-primary" onClick={HandleClick}>Show-Report</button>
                        </form>
                        {data.length?
                            data.map((item)=>(
                                <>
                                
                               {i++?null: (<span  style={{border:"1px solid black",width:"200px", display:"block",cursor:"pointer"}} onClick={printpdf}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg></span> )}
                                <table className="table table-info">
                                <tbody>
                                <tr><td></td><td></td><td>{item.str.split('!')[0]}</td><td></td><td></td></tr>
                                <tr><th>srnno</th><th>ItemName</th><th>price</th><th>qty</th><th>Amount</th></tr>
                                {(item.str.split('!')[1].split('(')[0].split(')')).map((pitem)=>(
                                   
                                    <tr>
       <td>{++k}</td>
       <td>{pitem.split('^')[1]}</td>
      <td>{pitem.split('^')[2]}</td>
       <td>{pitem.split('^')[3]}</td>
       <td>{ parseInt(pitem.split('^')[3])*parseInt(pitem.split('^')[2])}</td>
    </tr>
                                ) ) }
                                <tr><td></td><td></td><td></td><td>GrandTotal</td><td>{item.str.split('!')[1].split('(')[1]}</td></tr>

                                </tbody>
                                </table>
                                
                                </>
                            ))
                        
                        :
                        
                        isdata?<h2>There is no record between above dates</h2>:null}
                 </div>
                 </div>
                 </div>
                 { isloading&&<TailSpin 
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass="spinner"
      visible={true}
         />
        }
        </>
       )
}