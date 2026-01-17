import {FoodData} from "../Utils/FoodData";

export default function FoodCard({FoodData}){
 
    return(
        <>
         <img className="w-40 h-50 object-cover mt-20" src="https://media-assets.swiggy.com/swiggy/image/upload/ + FoodData?.imageId" ></img>
        </> 
    )
}

// "https://media-assets.swiggy.com/swiggy/image/upload/