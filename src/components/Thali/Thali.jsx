import style from "./Thali.module.css"
import Data from "../../data.json"
import { useEffect} from "react"
import {  add_data, add_to_cart, searchTerm } from "./ThaliSlice"
import { useDispatch, useSelector } from "react-redux"
import { FaSearch } from "react-icons/fa";

const Thali=()=>{
    const dispatch=useDispatch()
    const mainThali=useSelector((state)=>state.restroThali.mainThali)
    const itemSearched=useSelector((state)=>state.restroThali.search)
    const item=useSelector((state)=>state.restroThali.searched)
    const mainQuantity =useSelector((state)=>state.restroThali.totalQuantity)
    useEffect(()=>{
      dispatch(add_data(Data))
    },[])
    console.log(itemSearched)
    console.log(item)
    console.log(mainQuantity)
    return (
    <div className={style.mainContainer}>
      <div className={style.inputContainer}>
      <FaSearch style={{marginLeft:"10px"}}/>
<input type="text" placeholder="find your favorite dish" onChange={(e)=>dispatch(searchTerm(e.target.value))}/>
      </div>
      <div className={style.productContainer}>
        {item ?
        itemSearched.map((ele)=>{
            return(
              <div className={style.card} key={ele.id} style={{width: "20rem",height:"22rem"}}>
            <img src={ele.image} className="card-img-top" alt="product image"/>
            <div className="card-body">
              <h5 className="card-title">{ele.dish}</h5>
              <p className="card-text">{ele.description}</p>
              <button className={style.btnContainer} onClick={()=>dispatch(add_to_cart(ele))}>Add to cart</button>
            </div>
          </div>        
        )}): mainThali.map((ele)=>{
          return (
            <div className={style.card} key={ele.id} style={{width: "20rem",height:"22rem"}}>
            <img src={ele.image} className="card-img-top" alt="product image"/>
            <div className="card-body">
              <h5 className="card-title">{ele.dish}</h5>
              <p className="card-text">{ele.description}</p>
              <button className={style.btnContainer} onClick={()=>dispatch(add_to_cart(ele))}>Add to cart</button>
            </div>
          </div>
          )
        })

}
</div>
    </div>
    )
}

export default Thali;