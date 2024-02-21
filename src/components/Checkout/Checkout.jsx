import { Offcanvas } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { TiPlus } from "react-icons/ti";
import { HiMinusSm } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { Decrement, RemoveItem, checking, increment, total_cartValue } from "../Thali/ThaliSlice";
import style from "./Checkout.module.css"
import { useState } from "react";



const Checkout=()=>{
    const cart=useSelector((state)=>state.restroThali.cart)
    const total=useSelector((state)=>state.restroThali.totalPrice)
    const [isChecked,setisChecked]=useState(false)
    const [address,setAddress]=useState()
    const[lane,setLane]=useState()
    const [cardNumber,setcardNumber]=useState()
    const [cvvNumber,setcvvNumber]=useState()
    const [city,setCity]=useState()
    const dispatch=useDispatch()
    const cartHandler=()=>{
      if(cart.length>0 && submitHandler()){
        alert("Your order has been placed")
        return;
      }
    }
    function submitHandler(){
        if(address.length<0 && !isChecked){
          alert("please enter the address")
           return 
        }
        if(cardNumber.length<16){
          alert("please enter the card number")
          return 
        }
        if(cvvNumber.length<3){
           alert("please enter the cvv number")
          return 
          }
          if(city.length<3){
          alert("please enter the city")
          return 
          }
    }
    console.log(total)
    console.log(isChecked)
    return(
   <div className={style.tableContainer}>
    <div className="d-flex justify-content-left w-100">
    <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={()=>dispatch(total_cartValue())} disabled={cart.length==0}>Checkout</button>
</div>
    <div>
    <table className="table table-hover table-responsive m-3 cursor-pointer">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {cart.map((ele)=>
    <tr key={ele.id}>
      <th scope="row"><img src={ele.image} alt="product image" style={{width:"50px", height:"50px"}}/> {ele.dish}</th>
      <td>{ele.price}</td>
      <td><TiPlus className="m-1 " onClick={()=>dispatch(increment(ele.id))} />{ele.quantity}<HiMinusSm className="m-1" onClick={()=>dispatch(Decrement(ele.id))}/></td>
      <td>{ele.price*ele.quantity}</td>
      <td><MdDelete className="m-0 p-0" onClick={()=>dispatch(RemoveItem(ele.id))}/></td>
    </tr>
)}
  </tbody>
</table>
</div>
{/* offcanvas start */}
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel" className="text-decoration-underline fst-italic" >Checkout</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <form id="form"className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Address</label>
    <input type="text" className="form-control" value={address} id="inputEmail4" onChange={(e)=>setAddress(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Lane No.</label>
    <input type="text" className="form-control" id="inputPassword4" value={lane} onChange={(e)=>setLane(e.target.value)}/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">card number</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="XXXXXXXXXX4985" value={cardNumber} onChange={(e)=>setcardNumber(e.target.value)}/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Amount Payable</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder={total}/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" value={city} onChange={(e)=>setCity(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>Dehradun</option>
      <option>Chandigarh</option>
      <option>Delhi</option>
      <option>Mumbai</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">cvv</label>
    <input type="text" className="form-control" id="inputZip" value={cvvNumber} onChange={(e)=>setcvvNumber(e.target.value)}/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" value={isChecked} onChange={(e)=>setisChecked(e.target.checked)}/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary" disabled={!isChecked} onClick={cartHandler}>Pay</button>
  </div>
</form>
  </div>
</div>
   </div>
    )
}

export default Checkout;