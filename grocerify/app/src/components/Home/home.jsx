import React from "react";

import Hero from "../Hero/hero";
import Category from "../Category/category";
import Values from "../Values/values";
import Products from "../Products/products";
import Discount from "../Discount/discount";
import Process from "../Process/process";
import Testimonials from "../Testimonials/testimonials";

import Fruits from "../Fruits/fruits";



const home = () => {
  return (
    <div>
     
      <Hero />
      <Category />
      <Values />
      <Products/>
      <Discount/>
      <Process/>
      <Testimonials/>
      
      <Fruits/>
      

    </div>
  );
};

export default home;
