import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ContactUs from "./components/ContactUs";
import { BrowserRouter, Route,Routes } from "react-router-dom";

function App() {
  let class_={
    name:"mohit",
    age:22,
    collage:"RJIT"
  }
  let items = [
    {
      name: "Gaming Laptop",
      description: "This is a gaming laptop",
      price: 75000
    },
    {
      name: "Mobile Phone - Samsung",
      description: "Note 10",
      price: 65000
    }
  ]
  return (
    // <div className="flex">
    //   <div className="flex-1">
    //    <Home name={class_.name}  age={class_.age}  />
    //   {items.map((ele,index)=>        
    //     (
    //     <Shop  name={ele.name} description={ele.description} price={ele.price}  > </Shop>)
    //   )}
    //    {/* <Shop name={items.name}  items={items}></Shop> */}
    //   <ContactUs></ContactUs>
    //   </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={    <Home name={class_.name}  age={class_.age}  />
} />
        <Route path="/shop" exact component={Shop} element={  items.map((ele,index)=>        
       (
       <Shop  name={ele.name} description={ele.description} price={ele.price}  > </Shop>)
     )}/>
        <Route path="/contactus" exact element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>

    // </div>
  );
}

export default App;
