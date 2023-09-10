import React from 'react';

const form = ({handleWidth,width,
  handleLength,length,
  quantity,handleQuantity,
  thickness,handleThickness,
  price,handlePrice,
  total,handleCalc
}) => {
  return (
 <form  autocomplete="off" onSubmit={handleCalc} >
<div className="form-center">

<div className="form-group">
<label htmlFor="width" >Width in inches</label>
<input  autocomplete="off"  className="form-control" type="text" id="width"  value={width} onChange={handleWidth}/>
</div>

<div className='form-group'>
 <label htmlFor="thickness">Thickess in inches</label>
 <input  autocomplete="off" className="form-control" type="text" id='thickness'  value={thickness} onChange={handleThickness} />
</div>


<div className='form-group'>
 <label htmlFor="length">length in feet</label>
 <input  autocomplete="off" className="form-control" type="text" id='length'  value={length} onChange={handleLength}/>
</div>


<div className='form-group'>
 <label htmlFor="quantity">Quantity</label>
 <input  autocomplete="off" className="form-control" type="text" id='quantity'  value={quantity} onChange={handleQuantity}/>
</div>


<div className='form-group'>
 <label htmlFor="price">Price per 1000ft</label>
 <input  autocomplete="off" className="form-control" type="text" id='price'  value={price} onChange={handlePrice} />
</div>
 
</div>
<button className="btn" type="submit" >calculate</button>

</form>
  );
}

export default form;
