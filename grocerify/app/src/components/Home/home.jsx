
import Category from "../Category/category.jsx";
import Discount from "../Discount/discount.jsx";
import Fruits from "../Fruits/fruits.jsx";
import Hero from "../Hero/hero.jsx";
import Process from "../Process/process.jsx";
import Products from "../Products/products.jsx";
import Testimonials from "../Testimonials/testimonials.jsx";
import Values from "../Values/values.jsx";



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
