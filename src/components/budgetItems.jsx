import React from 'react';
import { ImBin2 } from "react-icons/im";
import {AiFillEdit} from 'react-icons/ai';
const budgetItems = ({expense: {id,total, quantity},handleDelete,handleEdit}) => {
  return (
    <li className="item">
        <div className="info">
          <span className="expense">Quantity: {quantity}</span>
          <span className="amount">Total:${total}</span>
        </div>
        <div>
          <button className="edit-btn" onClick={()=>handleEdit(id)}><AiFillEdit/></button>
          <button className="clear-btn" onClick={()=>handleDelete(id)} ><ImBin2/></button>
        </div>
      </li>
  );
}

export default budgetItems;
