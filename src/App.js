import React,{useState} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";

import FoodOptions from "./components/FoodOptions.js";          
import FoodCard from "./components/FoodCard.js";

import GroceryOption from "./components/GroceryOption.js";

export default function App() {
  return (
    <div>
      <Header/> 
      <FoodOptions/>
      <GroceryOption/> 
    </div>
  );
}  