import { useState } from "react"

export function Home(){
    const [pdate,setpdate]=useState("")
    const [ndate,setndate]=useState("")
    const [data,setresult]=useState([])
    let filteredResults 
    
    let i=0
    const HandleClick=(e)=>
    {
        e.preventDefault()
        //alert('in function')
        const d1 = new Date(pdate);
    const d2 = new Date(ndate)
        if(d1>=d2)
        {
            alert("Please select first date previous to next date input")
        }
        else
        {
            
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
                 filteredResults =result.filter(item =>  (new Date(item.datestr)>=d1 && new Date(item.datestr))<=d2)
               
                setresult(filteredResults)
                console.warn('result',filteredResults)
                console.log(filteredResults)
            }
               
                
                asyncFn();

        }

    }
    const handleclick=()=>{
        alert('ur printing')
    }
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
                                              
                        {data?
                        <> 
                            {data.map((item)=>(
                            
                            <div className="border border-5">
                            {i++?null:<span  style={{border:"1px solid black",width:"200px", display:"block"}} onClick={handleclick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg>
                            </span>}
                          <span>{item.str.split('!')[0]}</span>
                          <div className="border border-3">
                          <span className="p-3" style={{border:"1px solid black",width:"200px", display:"inline-block"}}> <b>ITEM_NAME</b></span>
                          <span className="p-3" style={{border:"1px solid black",width:"80px", display:"inline-block"}}><b>PRICE</b></span>
                          <span className="p-3" style={{border:"1px solid black",width:"50px", display:"inline-block"}}><b>QTY</b></span>
                          <span className="p-3" style={{border:"1px solid black", width:"100px", display:"inline-block"}}><b>AMOUNT</b></span>
                         </div>
                     {(item.str.split('!')[1].split('(')[0].split(')')).map((pitem)=>(
                       <div className="border border-3">
                          <span className="p-3" style={{border:"1px solid black",width:"200px", display:"inline-block"}}> { pitem.split('^')[1]}</span>
                          <span className="p-3" style={{border:"1px solid black",width:"80px", display:"inline-block"}}>  {pitem.split('^')[2]}</span>
                          <span className="p-3" style={{border:"1px solid black",width:"50px", display:"inline-block"}}> {pitem.split('^')[3]}</span>
                          <span className="p-3" style={{border:"1px solid black", width:"100px", display:"inline-block"}}>  { parseInt(pitem.split('^')[3])*parseInt(pitem.split('^')[2])}</span>
                         </div>
                        ))}
                        <span className="p-3 text-end" style={{border:"1px solid black",width:"435px", display:"inline-block"}}>TOTAL AMOUNT:- {item.str.split('!')[1].split("(")[1]}</span>

                        </div>
                        
                       ))}</>:null}
                       
                    </div>
                </div>
            </div>
        </>
       )
}