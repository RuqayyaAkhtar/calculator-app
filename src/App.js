import './App.css';
import Alert from './components/alert';
import Form from './components/form'
import ExpensesList from './components/expenseList';
import React, { useState } from "react";
import {v4 as uuid} from "uuid"

let initialTotal=[
  {id:uuid(),total:41666,quantity:1},
  {id:uuid(),total:83333,quantity:2}
]

function App() {
  const [width , setWidth]=useState("")
const [price,setPrice]=useState("")
const [length, setLength]=useState("")
const [quantity,setQuantity]=useState("")
const[thickness,setThickness]=useState("")
const[total,setTotal]=useState("")
const [expense, setExpense] =useState(initialTotal)
const [alert, setAlert] = useState({show:false})
const [id, setId] = useState(0)
const [edit, setEdit] = useState(false)

const handleWidth=(e)=>{
  let width=e.target.value;
  if(width===""){
    setWidth(width)
  }else{
    setWidth(parseInt(width))
  }
console.log(width,"width")
}


const handleThickness=(e)=>{
let thickness=e.target.value;
if(thickness===""){
  setThickness(thickness)
}else{
  setThickness(parseInt(thickness))
}
console.log(thickness,"thickness")
}

const handleLength=(e)=>{
  let length=e.target.value;
  if(length===""){
    setLength(length)
  }else{
    setLength(parseInt(length))
  }
console.log(length,"length")
}

const handleQuantity=(e)=>{
let quantity=e.target.value;
if(quantity===""){
  setQuantity(quantity)
}else{
  setQuantity(parseInt(quantity))
}
console.log(quantity,"quantity")
}

const handlePrice=(e)=>{
let price=e.target.value;
if(price===""){
  setPrice(price)
}else{
  setPrice(parseInt(price))
}
console.log(price,"price per board")
}

const handleAlert=({type,text})=>{
  setAlert({show:true,type,text});
  setTimeout(()=>{
    setAlert({show:false})
  },5000)
  }

  
const handleCalc=(e)=>{
  e.preventDefault()
  console.log("ok")
  if( width>0 && length>0 && thickness>0 && quantity>0 && price>0){
    let multi=length*width*thickness
    let multiMore=multi
    let subtotal=multiMore/144
    var semitotal=subtotal*price
    var total=Math.round(semitotal*quantity)
    setTotal(total)
    // let expense=total;
    console.log(expense,"expense")
       console.log(total,"total , if")
       const singleExpense={id: uuid(),total,quantity,thickness,length,width,price};
       setExpense([...expense,singleExpense]);
       handleAlert({type:"success",text:"item added"});
       setEdit(false)
  }
  else{
   handleAlert({type:"danger", text:"input can't be empty value and input value has to be bigger than zero"})
  }

}

const handleEdit=id=>{
  var expenses = expense.find(item => item.id === id);
  console.log(expenses)
  let {total,quantity,width,length,thickness,price}=expenses
  setTotal(total)
  setQuantity(quantity)
  setWidth(width)
  setLength(length)
  setThickness(thickness)
  setPrice(price)
 setEdit(true)
 setId(id)
}

const handleDelete=id=>{
  let tempExpenses = expense.filter(item => item.id !== id);
    setExpense(tempExpenses); 
  handleAlert({ type: "danger", text: "item deleted" });
}



const clearItems=(e)=>{
  setExpense([])
  console.log("clear")
  }
  
  return (
    <>
    <Alert type={alert.type} text={alert.text} />
    <h1>Board feet claculator</h1>
     <div className="App">
     <Form
     handleCalc={handleCalc}
     total={total}
    width={width}
    handleWidth={handleWidth}
    length={length}
    handleLength={handleLength}
    thickness={thickness}
    handleThickness={handleThickness}
    quantity={quantity}
    handleQuantity={handleQuantity}
    price={price}
    handlePrice={handlePrice}
     />
     <ExpensesList
     expense={expense}
     total={total}
     quantity={quantity}
     handleDelete={handleDelete}
     handleEdit={handleEdit}
    clearItems={clearItems}
    edit={edit}
     />
     </div>
    </>
   
  );
}

export default App;
