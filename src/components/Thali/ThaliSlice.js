import { createSlice } from "@reduxjs/toolkit";


const initialState={
    mainThali:[],
    cart:[],
    totalPrice:0,
    totalQuantity:0,
    search:[],
    searched:"",
}
export const ThaliSlice=createSlice({
    name:"restroThali",
  initialState,
  reducers:{
     add_data:(state,action)=>{
        return{
          ...state,
          mainThali:action.payload,
        }
     },
     add_to_cart:(state,action)=>{
      let find= state.cart.findIndex((ele)=>ele.id===action.payload.id)
      if(find>=0){
        state.cart[find].quantity+=1
      } else{     
       state.cart.push(action.payload)
      }  
    },
      increment:(state,action)=>{
        state.cart.find((ele)=>{
          if(ele.id==action.payload)
            return ele.quantity += 1
        })
      },
      Decrement:(state,action)=>{
        state.cart.find((ele)=>{
          if(ele.id==action.payload)
            return ele.quantity>1? ele.quantity-= 1 : ele.quantity
        })
      },
      total_cartValue:(state)=>{
       let carttotal= state.cart.reduce((cartTotal,cartItem)=>{
          let {price,quantity}=cartItem
            const itemTotal = Number(price) * Number(quantity) 
           cartTotal+=itemTotal
           state.totalQuantity+=quantity
           return cartTotal
        },0)
        state.totalPrice=carttotal
      },
      RemoveItem:(state,action)=>{
      const deletedItem=state.cart.filter((ele)=>ele.id !== action.payload)
        state.cart=deletedItem 
      },
      searchTerm:(state,action)=>{
        const Searching=state.mainThali.filter((ele)=>{
           if(ele.dish.toLowerCase().includes(action.payload)){
            return ele.dish
           }
        })
        state.search=Searching
        state.searched=action.payload
      }
  }
})


export const {add_data,add_to_cart,increment,Decrement,total_cartValue,RemoveItem,checking,searchTerm}=ThaliSlice.actions

export default ThaliSlice.reducer;