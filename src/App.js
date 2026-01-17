import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import FoodOptions from "./components/FoodOptions.js";          

export default function App() {
  return (
    <div>
      <Header/> 
      <FoodOptions/>
    </div>
  );
}  