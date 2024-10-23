import React from "react";
import img from "../assets/img/about7.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div style={{marginLeft: "30px", paddingTop:"0px"}} className=" space-y-4 lg:pt-14" >
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        At our restaurant, we pride ourselves on delivering an exceptional culinary experience that combines fresh, 
        locally-sourced ingredients with the artistry of our talented chefs. Each dish is crafted with care, 
        ensuring that every bite bursts with flavor and creativity. 
        We are committed to using only the highest quality ingredients, and our dedication to freshness and sustainability is 
        reflected in every plate we serve.
        </p>
        <p>
        Beyond the food, our restaurant offers a warm and inviting ambiance that complements your dining experience. 
        With a cozy and thoughtfully designed space, we provide the perfect atmosphere for intimate dinners, family gatherings, 
        or celebrations with friends. Our friendly and attentive staff ensures that you’ll receive top-notch service from the moment 
        you walk in, making every visit a memorable one. 
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;