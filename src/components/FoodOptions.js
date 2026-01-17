import FoodCard from "./FoodCard";
import { imageGridCards } from "../Utils/FoodData"; 
import React from "react"; 
import ReactDOM from "react-dom/client";

export default function FoodOptions(){
    return( 
          <div className="mx-auto w-[80%] container flex flex-wrap mt-20 gap-5 justify-center">
            {
            imageGridCards.map((FoodData)=> 
                (<FoodCard key={FoodData.id} FoodData={FoodData}></FoodCard>))
            }  
          </div>
    )
} 