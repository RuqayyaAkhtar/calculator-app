import BudgetItems from "./budgetItems"

function expenseList ({expense,handleDelete, handleEdit, clearItems }){
  // console.log(budgetItems,"itemss")
return (
<div>
<ul className="list">


{
    expense.map((item)=>{
        return <BudgetItems
         expense={item}
         handleDelete={handleDelete}
         handleEdit={handleEdit}
        />
    })
}

</ul>
<button className="btn" onClick={clearItems}>Clear list</button>
</div>
)
}

export default expenseList;
