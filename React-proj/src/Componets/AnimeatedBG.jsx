import React from "react";
import AnimatedBg from "react-animated-bg";
import Workouts from "./Workouts";
import Workout from "./Workout";
import { useState } from "react";

const imagesList = [
   'url("https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg")',
   'url("https://images.dog.ceo/breeds/labrador/n02099712_5844.jpg")',
   'url("https://images.dog.ceo/breeds/labrador/n02099712_5343.jpg")',
   'url("https://images.dog.ceo/breeds/labrador/n02099712_7481.jpg")',
  'url("https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg")'
 ];

 const Wrapper = () => (

    <AnimatedBg  
    colors={imagesList}
    duration={5}
    delay={5} // it will wait 4 seconds before next transition starts
    timingFunction="linear"
    randomMode 
    className={"background"} >
   
   
   
    </AnimatedBg>
 );

 export default  Wrapper;
  