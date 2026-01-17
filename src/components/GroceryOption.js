import {GroceryGridCard} from "../Utils/Grocery";
import GrocerCard  from "../components/GroceryCard";

export default function GroceryOption(){
   return(
    <div className=" w-[80%] container mx-auto mt-20">
            <h1>Shop Groceries on Instamart</h1> 
            <div className=""> 
                    { 
                        GroceryGridCard.map((GroceryData)=><grocerycard key={GroceryData.id} foodData={foodData}></grocerycard>)
                    } 
                  </div> 
        </div>
   )
} 
