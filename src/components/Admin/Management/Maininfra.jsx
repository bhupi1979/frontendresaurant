
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Management } from "./Management"

export function Maininfra(){
    const [result1,setresult]=useState([])
    const[result2,setresultmtable]=useState([])
    const [mtbl,setmtbl]=useState([])
    const[state1,setstate1]=useState(false)
    const[infravalue,setinfravalue]=useState("")
    const[divs,setdivs]=useState([])
    const history=useNavigate()
    // const exit1=()=>{

        
    //     sessionStorage.setItem("adminsession","")
    //     sessionStorage.setItem("generalsession","")
    //    history('/mainpage')
       
        
    //        }
    useEffect(()=>{
        /**********this is for infra */
        const asyncFn = async () => {
        let result=  await fetch("https://backendrestaurant-i5ir.onrender.com/infra",
            {
            method:"GET",
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
 /**end of infra */
 /**this is for pitemtable */
 const asyncFn1 = async () => {
    let resultm=  await fetch("https://backendrestaurant-i5ir.onrender.com/showmtable",
        {
        method:"GET",
        headers:
        {
            "Content-Type":"application/json"
        }
    })
    resultm= await resultm.json()

    setresultmtable(resultm)
    let tbl=[]
     resultm.map((item,id)=>(
     tbl.push( item.str.split('!')[0])
     ))
    // alert(tbl[0])
     //alert(tbl[1])
setmtbl(tbl)
    console.warn('result',resultm)
    console.log(resultm)

    }
    asyncFn1();
  /**end of pitem table */
// if(!sessionStorage.getItem('generalsession'))
// history('/generallogin')
        
    },[])
function handlebuttonclick(e){
   // alert(e.target.innerText)
   mtbl.find(i=>{return i==e.target.innerText}) ? setdivs(result2) : setdivs([])
    setinfravalue(e.target.innerText)
    setstate1(true)
}
    return(
<>
    <h1 className="text-center">Welcome To Restaurant Management</h1>
   {/* <button className="p-2 btn btn-info" onClick={exit1}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-skip-backward-circle-fill" viewBox="0 0 16 16"> 
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.79-2.907L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.79-.407"/>
</svg> Back</button>*/}
    <div className="container">
    {result1.map((item,id)=>(<button className={`btn  ${mtbl.find(i=>{return i==item.name}) ? "btn-danger" : "btn-primary"} me-3 mt-3`} onClick={handlebuttonclick}>{item.name}</button>))}
    </div>
    {state1 && <Management name={infravalue} divs={divs}/>}
</>
    )
}