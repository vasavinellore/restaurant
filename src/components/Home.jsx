import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className=" text-backgroundColor">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto quisquam delectus minima perferendis nulla quia nisi laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo molestias omnis reprehenderit quae animi? Explicabo quasi accusamus laboriosam temporibus delectus, aut a? Quasi?
        </p>
        <div className=" lg:pl-44" style={{paddingLeft: "0px"}}>
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;