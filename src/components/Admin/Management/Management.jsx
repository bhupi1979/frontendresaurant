import { useEffect, useState } from "react"
import  ReactDOM  from "react-dom"

import jsPDF from "jspdf"

export function Management(props){
  let newid=[]
  let totalqty=[]
  let newtbl
    const [resultcat,setresult]=useState([])
    const [resultpitem,setresultpitem]=useState([])
    const [resultpitemdetail,setresultpitemdetail]=useState([])
    const[state1,setstate1]=useState(false)
    const [divs,setdivs]=useState([])
    const[qty,setqty]=useState({})
    const[str,setstr]=useState("")
    const[tamount,settamout]=useState(0)
    const[divsdatabase,setdivsdatabase]=useState([])
    

    useEffect(()=>{
        const asyncFn = async () => {  
    
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
                 
                 
    },[])

    useEffect(()=>{
      let nameexist=[]
      let priceexist=[]
      
      let grandtotal
      let strexist
      let strexist1=[]
      
      setdivsdatabase([])
      if(props.divs.length){
      props.divs.map(tblitem=>
       { if(tblitem.str.split('!')[0]==props.name)
              newtbl=tblitem
      }
      )
    strexist=newtbl.str.split('!')[1].split('(')[0]
    grandtotal=newtbl.str.split('!')[1].split('(')[1]
    strexist1=strexist.split(')')
    //alert(strexist1[0])
    let i
    for(i=0;i<strexist1.length;i++)
    {
      newid[i]=strexist1[i].split('^')[0]
        totalqty[i]=strexist1[i].split('^')[3]
        nameexist[i]=strexist1[i].split('^')[1]
        priceexist[i]=strexist1[i].split('^')[2]
    }
    // strexist1.map((item,id)=>(
    //     newid[i++]=item.split('^')[0],
    //     totalqty[i++]=item.split('^')[3]
        
    // ))
 
let existdivs=[]
let existdivsdatabase=[]
//alert(newid.length)
    for(i=0;i<newid.length;i++)
    {
      let existdiv={'id':newid[i],'name':nameexist[i],'price':priceexist[i]}
      existdivs.push(existdiv)
      // setdivsdatabase((pdivs)=>[...pdivs,{
      //   id:resultdata.id,
      //   name:resultdata.name,
      //   price:resultdata.price,
      //   qty1:1,
      //   tamount1:resultdata.price,
      //   gtamount:tamount
      // }])
      let existdivdatabase={id:newid[i],name:nameexist[i],price:priceexist[i],qty1:parseInt(totalqty[i]),tamount1:parseInt(totalqty[i])*parseInt(priceexist[i])}
      existdivsdatabase.push(existdivdatabase)
    // setqty((prevQty) =>  ({
    //            ...prevQty,
    //            [newid[i]]:parseInt(totalqty[i])
    //            }))
//  let existqt={[newid[i]]:totalqty[i]}
//  existqty.push(existqt)
  //alert(existqt[ ])
  
  //existqty.push(existqt)
    // const existDiv = (
      
    //    [{ 'id': newid[i],
    //     'name': nameexist[i],
    //     'price': priceexist[i]}]
    
    // );
  
    // existdivs.push(existDiv);
  
    // const existQty =  [newid[i]]: totalqty[i] ;
    // existqty.push(existQty);
          
  //     const asyncFn1 = async (existid,totalqtyexist) => {  
  //      // alert(existid)
  //       let result=  await fetch("http://127.0.0.1:8000/api/singlepitem/"+existid,
  //        {
  //        method:"GET",
  //        headers:
  //        {
  //            "Content-Type":"application/json"
  //        }
  //    })
  //   let resultdata= await result.json()
  //    alert(resultdata.id)
  //    setresultpitemdetail(resultdata)
  //    console.warn('result',resultdata)
  //    console.log(result)
  //    setqty((prevQty) => ({
  //      ...prevQty,
  //      [existid]: parseInt(totalqtyexist)
  //    }));
  //   //  let finditemincart=  divs.find(i=>{
  //   //    return i.id==resultdata.id
  //   //  })
  //   console.warn('the qty',qty)
    
  //   // if(!finditemincart){
  //    setdivs([...divs,resultdata])
  //    settamout(grandtotal)
  //    setdivsdatabase((pdivs)=>[...pdivs,{
  //      id:existid,
  //      name:resultdata.name,
  //      price:resultdata.price,
  //      qty1:1,
  //      tamount1:resultdata.price,
  //      gtamount:tamount
  //    }])
  //       //  }
  //     //    else{
  //     //      settamout(tamount+ parseInt(resultdata.price))
  //     //      setdivsdatabase( (prevDivs) =>
  //     //      prevDivs.map((divItem) =>
  //     //       divItem.id === item.id
  //     //          ? { ...divItem, qty1: (qty[item.id] || 1) + 1,tamount1:(qty[item.id]+1)*item.price,gtamount:tamount } 
  //     //          : divItem
           
  //     //      )
          
  //     //  )
  
  //     //    }
  //    //  if(finditemincart){
  //  //      alert('this i sfinditem'+finditemincart)
  //  //  alert('before'+ qty[resultdata.id])
  //  // //     setdivs( (prevDivs) =>
  //  // //     prevDivs.map((divItem) =>
  //  // //       divItem.id === resultdata.id
  //  // //         ? { ...divItem, quantity: (qty[resultdata.id] || 1) + 1 } 
  //  // //         : divItem
        
  //  // //     )
       
  //  // //   )
  //  // //  setqty([...qty[result.id],[resultdata.id]:1+qty[result.id]])
  //  // // setqty((prevQty) => ({
  //  // //     ...prevQty,
  //  // //     [resultdata.id]: prevQty[resultdata.id] +1,
  //  // //      }));
  //  //  // console.warn('this is divafter adding',await divs)
   
  //  //   alert('after'+ qty[resultdata.id])
  // //      }
  // //       else{
  // //       let addingproduct={
  // //         ...resultdata, 'quantity':1,'totalamount':resultdata.price
  // //     }
  // //     setdivs([...divs,addingproduct])
  
   
  // // }
  
  //     }
  
        /********code for existing divs */
       // asyncFn1(newid[i],totalqty[i])
        /******end of code */
    }
    settamout(parseInt(grandtotal))
    setdivs(existdivs)
    setdivsdatabase(existdivsdatabase)
    console.warn('the divs for table1',existdivs)
   //setqty(existqty)
    //console.warn('the divs for qty',qty) 
    }/*****if ends div.lenght */
    else{
      setdivs([])
      settamout(0)
      setqty([])
    }
    
    },[props.name])
    useEffect(() => {
      // ... your existing code ...
    
      if (newid.length > 0) {
       // alert(newid.length)
        // Create an object from newid and totalqty arrays
        const qtyObject = newid.reduce((acc, id, index) => {
          acc[id] = parseInt(totalqty[index]);
          //let existdivdatabase={id:newid[i],name:nameexist[i],price:priceexist[i]}
          //console.warn('the acc',acc)
          return acc;
        }, {});
    
        // Set the qty state with the created object
        setqty(qtyObject);
      }
    }, [newid]);
   

//     useEffect(() => {
//       setqty((prevQty) => ({
//         ...prevQty,
//         [newid[i]]:totalqty[i]
//          }))
// }, [newid]);
    const selectPitem=(e)=>{
     //alert(e.target.value)
     const asyncFn = async () => {  
    
        //**********javascrp for tooltip ends her */
   
           let result=  await fetch("https://backendrestaurant-i5ir.onrender.com/pitem/"+e.target.value,
           {
           method:"GET",
           headers:
           {
               "Content-Type":"application/json"
           }
       })
       result= await result.json()
       //alert(result)
       setresultpitem(result)
       console.warn('result',result)
       console.log(result)
       
        }
        asyncFn();

    }
    const handlepitem=(e,item)=>
    {
       // alert(key)
      console.log(item)
      e.preventDefault(); 
        const asyncFn = async () => {  
             let result=  await fetch("https://backendrestaurant-i5ir.onrender.com/singleproductdetail/"+item._id,
              {
              method:"GET",
              headers:
              {
                  "Content-Type":"application/json"
              }
          })
         let resultdata= await result.json()
          alert(resultdata.id)
          setresultpitemdetail(resultdata)
          console.warn('result',resultdata)
          console.log(result)
          setqty((prevQty) => ({
            ...prevQty,
            [resultdata.id]: (prevQty[resultdata.id] || 0) + 1,
          }));
          let finditemincart=  divs.find(i=>{
            return i.id==resultdata.id
          })
         console.warn('the qty',qty)
         
         if(!finditemincart){
          setdivs([...divs,resultdata])
          settamout(tamount+ parseInt(resultdata.price))
          setdivsdatabase((pdivs)=>[...pdivs,{
            id:resultdata.id,
            name:resultdata.name,
            price:resultdata.price,
            qty1:1,
            tamount1:resultdata.price,
            gtamount:tamount
          }])
              }
              else{
                settamout(tamount+ parseInt(resultdata.price))
                alert('in finiditemcart'+item.id)
                setdivsdatabase( (prevDivs) =>
                prevDivs.map((divItem) =>
                       divItem.id ==  item.id
                    ? { ...divItem, qty1: (parseInt(qty[item.id]) || 1) + 1,tamount1:(parseInt(qty[item.id])+1)*item.price,gtamount:tamount } 
                    : divItem
                
                )
               
            )
          
              }
        
           }
           asyncFn();
           console.warn('the divs',divs)
           console.warn('the divsdatabase',divsdatabase)
}
           
        
           const handleplus = (itemId,item) => {
            setqty((prevQty) => ({
                ...prevQty,
                [itemId]: prevQty[itemId] +1,
                 }));
                 settamout(tamount+ parseInt(item.price))
                 setdivsdatabase( (prevDivs) =>
                      prevDivs.map((divItem) =>
                       divItem.id === itemId
                          ? { ...divItem, qty1: (qty[itemId] || 1) + 1,tamount1:(qty[item.id]+1)*item.price,gtamount:tamount } 
                          : divItem
                      
                      )
                     
                  )

          }
        
          const handleminus = (itemId,item) => {
            if (qty[itemId] > 1) {
              setqty((prevQty) => ({
             ...prevQty,
             [itemId]: prevQty[itemId] - 1,
              }));
              settamout(tamount-parseInt(item.price))
              setdivsdatabase( (prevDivs) =>
                      prevDivs.map((divItem) =>
                       divItem.id === itemId
                          ? { ...divItem, qty1: (qty[itemId] || 1) - 1,tamount1:(qty[itemId]-1)*item.price,gtamount:tamount } 
                          : divItem
                      
                      )
                     
                  )
              console.warn('minusqty',qty)
           
            }
        }
        
       const removecart=(item)=>{
          let newdiv=divs.filter(divitem=>
            divitem.id!==item.id
          )
          setqty((prevQty) => ({
            ...prevQty,
            [item.id]:0,
             }));
          setdivs(newdiv)
          settamout(tamount-parseInt(qty[item.id]*item.price))
          let newdivdatabase=divsdatabase.filter(divitem=>
            divitem.id!==item.id
          )
          setdivsdatabase(newdivdatabase)
          console.warn('thisi sfinal div',newdiv)
       }
//*************for generateqt************* */
/******************************* */
       const saveToDatabase = async () => {
        let str=props.name+'!'
        let grandtotal=0
        alert('in the database')
        console.warn('the divs the dataabase item',divsdatabase)
        divsdatabase.map((item,id)=>(
            str+=item.id+'^'+item.name+'^'+item.price+'^'+item.qty1+'^'+item.tamount1+')',
            grandtotal+=parseInt(item.tamount1)
        ))
        str=str.substring(0,str.length-1)
        str+='('+grandtotal
        alert(str)
    console.warn('this is str',str)
    let jsDate=new Date()
    const mysqlDateString = jsDate.toLocaleString();
    let printqt=0
    const requestData = {
      'str': str,
      'datestr': mysqlDateString,
      'printqt': printqt
    };  
    /***********checkingo f props.divs.length */
    /******first check if there is data in divsdatabase */
    
    if(divsdatabase.length>0)
    {
      if(props.divs.length==0)
      {
    
        // try {
        //    // Replace 'http://your-server-endpoint' with the actual endpoint on your server
        //    const response = await fetch('http://127.0.0.1:8000/api/management', {
        //      method: 'POST',
        //      headers: {
        //        'Content-Type': 'application/json',
        //      },
        //      body: JSON.stringify(requestData), // Assuming divs is an array of objects
        //    });
      
        //    if (response.ok) {
        //      console.log('Data saved to the database successfully');
        //      console.log(response)
        //      // If needed, you can clear the divs state or perform other actions after saving
        // //     setdivs([]);
        //    } else {
        //      console.error('Failed to save data to the database');
        //    }
        //  } catch (error) {
        //    console.error('Error saving data to the database:', error);
        //  }
        let result= await fetch("https://backendrestaurant-i5ir.onrender.com/management",
        {
            method:"POST",
            headers: {
                      'Content-Type': 'application/json',
                   },
                   body: JSON.stringify(requestData)
        })
        
        result= await result.json()
        console.warn('the result is',result)
        
        //window.location.reload()
//***********pdf print */
// //  const newWindow = window.open("", "_blank");
// //  ReactDOM.render(
// //    <Qtpdf str={str} />,
// //   newWindow.document.body
//  );
// const blob = new Blob([str], { type: 'application/pdf' });

//   // Create a data URL from the Blob
//   const dataUrl = URL.createObjectURL(blob);

//   // Open a new window and set its content to the data URL
//   const newWindow = window.open("","_blank");
//   newWindow.document.open();
//   newWindow.document.write('<html><head><title>PDF Content</title></head><body>');
//   newWindow.document.write('<embed width="100%" height="100%" name="plugin" src="' + dataUrl + '" type="application/pdf">');
//   newWindow.document.write('</body></html>');
//   newWindow.document.close();

       
      }
      //elese there is update
      else{
        console.warn("the propsid",props.divs[0].id)
        console.warn('the divs in update',props.divs)
       let divsid= props.divs.filter(tblitem=>
           tblitem.str.split('!')[0]==props.name
                
         )
         alert(divsid[0].id)
        let result= await fetch("http://127.0.0.1:8000/api/updatemanagement/"+divsid[0].id ,
        {
            method:"POST",
            headers: {
                      'Content-Type': 'application/json',
                   },
                   body: JSON.stringify(requestData)
        })
        
        result= await result.json()
        console.warn('the result is',result)
        printingqt(str)
        
  // Print the document
  
//         const newWindow = window.open("", "_blank");
//  ReactDOM.render(
//    <Qtpdf str={str} />,
//   newWindow.document.body
//  );
        window.location.reload()
      }
      
      }
      else{
        alert("please enter some value in cart")
      }
        // if(result.status==201){
        //   alert('data has uploaded')
        // // setname("")
        // // setslug("")
       
        
        // // setmsg2("Data has been uploaded succeddfully")
        // //         setTimeout(() => {
        // //         setmsg2("")
                
        // //         }, 1000)
        //      }
      };
      //**********endo of generateqt*******************/
//************************************************** */
const saveToDatabaseprint = async () => {
  let str=props.name+'!'
  let grandtotal=0
  alert('in the database')
  console.warn('the divs the dataabase item',divsdatabase)
  divsdatabase.map((item,id)=>(
      str+=item.id+'^'+item.name+'^'+item.price+'^'+item.qty1+'^'+item.tamount1+')',
      grandtotal+=parseInt(item.tamount1)
  ))
  str=str.substring(0,str.length-1)
  str+='('+grandtotal
console.warn('this is str',str)

/***********checkingo f props.divs.length */
/******first check if there is data in divsdatabase */
if(divsdatabase.length>0)
{
if(props.divs.length==0)
{
  alert("Please first generate qt")
// let jsDate=new Date()
// const mysqlDateString = jsDate.toLocaleString();
// let printqt=0
// const requestData = {
// 'str': str,
// 'datestr': mysqlDateString,
// 'printqt': printqt
// };
//   // try {
//   //    // Replace 'http://your-server-endpoint' with the actual endpoint on your server
//   //    const response = await fetch('http://127.0.0.1:8000/api/management', {
//   //      method: 'POST',
//   //      headers: {
//   //        'Content-Type': 'application/json',
//   //      },
//   //      body: JSON.stringify(requestData), // Assuming divs is an array of objects
//   //    });

//   //    if (response.ok) {
//   //      console.log('Data saved to the database successfully');
//   //      console.log(response)
//   //      // If needed, you can clear the divs state or perform other actions after saving
//   // //     setdivs([]);
//   //    } else {
//   //      console.error('Failed to save data to the database');
//   //    }
//   //  } catch (error) {
//   //    console.error('Error saving data to the database:', error);
//   //  }
//   let result= await fetch("http://127.0.0.1:8000/api/management",
//   {
//       method:"POST",
//       headers: {
//                 'Content-Type': 'application/json',
//              },
//              body: JSON.stringify(requestData)
//   })
  
//   result= await result.json()
//   console.warn('the result is',result)
//   window.location.reload()
}
//elese there is update
else{
  let divsid= props.divs.filter(tblitem=>
    tblitem.str.split('!')[0]==props.name
         
  )
  alert(divsid[0].id)
   let jsDate=new Date()
 const mysqlDateString = jsDate.toLocaleString();
let printqt=1
const requestData = {
'str': str, 'datestr': mysqlDateString,
 'printqt': printqt
 };
  let result= await fetch("http://127.0.0.1:8000/api/managementupdate/"+divsid[0].id,
  {
      method:"POST",
      headers: {
                'Content-Type': 'application/json',
             },
             body: JSON.stringify(requestData)
  })
  
  result= await result.json()
  console.warn('the result is',result)
  printingqt(str)
  window.location.reload()
}

}
else{
  alert("please enter some value in cart")
}
  // if(result.status==201){
  //   alert('data has uploaded')
  // // setname("")
  // // setslug("")
 
  
  // // setmsg2("Data has been uploaded succeddfully")
  // //         setTimeout(() => {
  // //         setmsg2("")
          
  // //         }, 1000)
  //      }
};
//**********endo of printqt*******************/
//************************************************** */

function printingqt(str){
  const doc = new jsPDF({
    unit: "mm",
format: [80, 160]
});
doc.setFontSize(14)
doc.text("Welcome To Saksham Restaurant", 2, 10);
doc.line(1,11,80,11)
doc.text("opposite essar petrol pump",6,18)
doc.setFontSize(12)
doc.text("Ratlam Road Dalot Distt. Pratapgarh",4,24)
doc.setFontSize(16)
doc.text(str.split('!')[0],24,30)
doc.setFontSize(12)
doc.line(1,31,80,31)

doc.line(1,37,80,37)
let gtotal=str.split('!')[1].split('(')[1]
let reststr=str.split('!')[1].split('(')[0]
  let newlines=reststr.split(')')
  let yPos = 42;
  doc.setFontSize(9);

    // Set the fixed width for each column
    const itemNameX = 1;
    const priceX = 50;
    const qtyX = 60;
    const totalAmountX =68;

    // Add column titles
    doc.text("Item-name", itemNameX, 36);
    doc.text("Price", priceX, 36);
    doc.text("Qty", qtyX, 36);
    doc.text("Amount", totalAmountX, 36);
    newlines.forEach((item) => {
      doc.text(item.split('^')[1], itemNameX, yPos);
      doc.text(item.split('^')[2], priceX, yPos);
      doc.text(item.split('^')[3], qtyX, yPos);
      doc.text(item.split('^')[4], totalAmountX, yPos);

      yPos += 6; // Adjust the vertical position for the next item
    });
    doc.setFontSize('12')
    doc.line(1,yPos,80,yPos)
     doc.text("Grand-Total:-"+gtotal,44,yPos+4)
doc.line(1,yPos+6,80,yPos+6)
    // Set the position for the items
    
    // Loop through the items and add them to the document
    
//doc.save("two-by-four.pdf");
const pdfBlob = doc.output("blob");

// Create a data URI for the Blob
const pdfDataUri = URL.createObjectURL(pdfBlob);

// Open a new window with the PDF data URI for printing
const printWindow = window.open(pdfDataUri);
printWindow.print()

}

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="infraname">
                        <h1 className="text-center bg-warning">this is management</h1>
                        {props.divs.length!=0?<>
                       <h2 className="text-center bg-info">{props.name}</h2>
                       <table className=" table table-responsive bg-info table-hover">
                         <thead>
                            <tr>
                            <td colSpan={3}>Add-Decrement</td>
                            <td>Name</td> 
                            <td>Price</td> 
                            <td>Qty</td>
                            <td>Total</td>
                            <td>Action</td>
                         </tr>
                         </thead>
                         <tbody> 
                        { divs?divs.map((item,key)=>(<tr key={key} >
                        <td onClick={()=>handleplus(item.id,item)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></td>
                        <td >{Number(qty[item.id])}</td>
                        <td  onClick={()=>handleminus(item.id,item)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></td>
                            
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{Number(qty[item.id])}</td>
                            <td>{item.price*Number((qty[item.id]))}</td>
                            <td><button className="btn btn-danger btn-sm" onClick={()=>removecart(item)}>remove</button></td>
                        </tr>)):'No item in cart'}
                        <tr><td></td><td></td><td></td><td></td><td></td><td>totalamount</td><td>{tamount}</td></tr>
                        </tbody>
                        </table>
                        <button className="btn btn-info" onClick={()=>saveToDatabase()}>GenerateQT</button>
                        <button className="btn btn-warning" onClick={()=>saveToDatabaseprint()}>Printqt</button>
                        </>
                        :<><h2 className="text-center bg-info">{props.name}</h2>
                         <table className=" table table-responsive bg-info table-hover">
                         <thead>
                            <tr>
                            <td colSpan={3}>Add-Decrement</td>
                            <td>Name</td> 
                            <td>Price</td> 
                            <td>Qty</td>
                            <td>Total</td>
                            <td>Action</td>
                         </tr>
                         </thead>
                         <tbody>
                        { divs?divs.map((item,key)=>(<tr key={key}>
                        <td onClick={()=>handleplus(item.id,item)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></td>
                        <td >{qty[item.id]}</td>
                        <td  onClick={()=>handleminus(item.id,item)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg></td>
                            
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{qty[item.id]}</td>
                            <td>{item.price*qty[item.id]}</td>
                            <td><button className="btn btn-danger btn-sm" onClick={()=>removecart(item)}>remove</button></td>
                        </tr>)):'No item in cart'}
                        <tr><td></td><td></td><td></td><td></td><td></td><td>totalamount</td><td>{tamount}</td></tr>
                        </tbody>
                        </table>
                        <button className="btn btn-info" onClick={()=>saveToDatabase()}>GenerateQT</button>
                        <button className="btn btn-warning" onClick={()=>saveToDatabaseprint()}>Printqt</button>
                        </>}
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <form className="form-control">
                            <select name="pcategory" id="pcategory" className="form-control" onClick={selectPitem}>
                                <option value={0}>SELECT category</option>
                                {resultcat.map((item,id)=>(<option value={item._id}>{item.name}</option>))}
                            </select>
                            
                                {resultpitem?resultpitem.map((item)=>(<button className="btn btn-warning mt-2 me-2" key={item.id} onClick={(e)=>handlepitem(e,item)} >{item.name}</button>)):null}
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}