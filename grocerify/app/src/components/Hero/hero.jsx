import Button from "../Button/button.jsx";
import basket from './../../assets/basket.png';

const Hero = () => {
  return (
    <section>
        <div className="max-w-[1400px] min-h-screen mx-auto px-10 flex  md:flex-row flex-col items-center md:pt-25 pt-35" >

      <div className="flex-1">
        <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
          Export Best Quality...
        </span>
        <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-4">
          Tasty Organic <span className="text-orange-500"> Fruits </span> and{" "}
          <span className="text-orange-500">Veggies</span> <br/> in your city
        </h1> <br/>
        <p className="text-zd inc-600 md:text-lg-md max-w-[530px] mt-5 mb-10">
            Bread for a high content of beneficial substances. Our products are all fresh and healthy
        </p>
        <Button content="Shop now"/>
      </div>

      <div className="flex-1 justify-end">
        <img src={basket} alt="basket image" />
      </div>
        </div>
    </section>
  );
};

export default Hero;
