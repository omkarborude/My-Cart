import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Products } from "./Products";
import { useCart } from "./Cart-Context";





export function ProductListing() {
  const [getcurprice,setgetcurprice] = useState([]);
  const { cartItems , setcartItems } = useCart();
 
 console.log(getcurprice);   
  
  return Products.map((item) =>(
      
     <div className="inner-listing-div">

        <div  className="productlist">
          <div className="imd-div"><img src={item.img} alt=""/></div>
        <div className="info">
        <h2 className="name">{item.name}</h2>
        <span className="rating">{item.rating}</span>
        <h3 className="price">₹ {item.price} <span className="off">{item.off}</span> </h3>
        </div>
       <button
       onClick={() =>
       setcartItems((items) => [...items, item])
      }
       className="BTNaddtocart"
       >
         Add To Cart
       </button>
      
       </div>
       </div>
     
  ))
}

 
  
export function Cart() {
  const { cartItems , setcartItems } = useCart();
  return (
    <>
    {
      cartItems.map(({ img, name, rating, price, id, off }) => (
        <div className="inner-listing-div">
        
        <div  className="productlist">
          <div className="imd-div"><img src={img} alt=""/></div>
        <div className="info">
        <h2 className="name">{name}</h2>
        <span className="rating">{rating}</span>
        <h3 className="price">₹ {price} <span className="off">{off}</span> </h3>
        </div>
        <button
        onClick={() => {
          setcartItems((first) => first.filter((item) => item.id !== id));
        }}
      
       className="BTNaddtocart"
       >
         Remove
       </button>
       </div>
       </div>
      ))
    }
    </>
  );
}

export default function App() {
  const { cartItems } = useCart();
  const [ route, setroute ] = useState("Products");
  return (
    <div className="App">
      <div className="navbar">
      <button
          onClick={() => setroute("Products")}
          className="BTNproduct"
          >Home</button>

        <h1
        style={{
          marginTop:"10px"
        }}
        >Neog Phones 
        </h1>

        <button
          onClick={() => setroute("Cart")}
          className="BTNcart"
          ><i class="fas fa-shopping-cart"></i> Cart {cartItems.length}</button>
      </div>
     
        
          
      
      <div className="showing-card">
        {route === "Products" && <ProductListing/>}
        {route === "Cart" && <Cart/>}
       
      </div>
    </div>
  );
}
