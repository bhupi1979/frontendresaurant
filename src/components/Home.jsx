import { useState } from "react"

export function Home(){
    const [pdate,setpdate]=useState("")
    const [ndate,setndate]=useState("")
    const [data,setresult]=useState([])
    const HandleClick=(e)=>{
        e.preventDefault()
        //alert('in function')
        const d1 = new Date(pdate);
    const d2 = new Date(ndate)
        if(d1>=d2)
        {
            alert("Please select first date previous to next date input")
        }
        else{
            const fdata={date1:d1,date2:d2}
            const asyncFn = async () => {
                let result=  await fetch("https://backendrestaurant-i5ir.onrender.com/managementsale",
                    {
                    method:"Post",
                    body:JSON.stringify(fdata),
                    headers:
                    {
                        "Content-Type":"application/json"
                    }
                })
                result= await result.json()
        
                setresult(result)
                console.warn('result',result)
                console.log(result)
        
                }
                asyncFn();

        }

    }
       return(
        <>
            <h1 className="text-center">welcome to Saksham Restaurant</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h3>*******SALES REPORT*********</h3>
                        <form className="form-control">
                            <input className="form-control" type="datetime-local" name="pdate" id="pdate" placeholder="Enter date from" value={pdate} onChange={(e)=>{setpdate(e.target.value)}}/>
                            <br/><br/>
                            <input className="form-control" type="datetime-local" name="ndate" id="ndate" placeholder="Enter date to" value={ndate} onChange={(e)=>{setndate(e.target.value)}}/>
                            <br/><br/>
                            <button type="submit" className="btn btn-primary" onClick={HandleClick}>Show-Report</button>
                        </form>
                        {data?data.map((item,id)=>(<div>{item.str}</div>)  ):null}
                    </div>
                </div>
            </div>
        </>
       )
}