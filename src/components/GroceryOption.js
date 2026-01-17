import {GroceryGridCard} from "../Utils/Grocery";
import GroceryCard  from "../components/GroceryCard";

export default function GroceryOption(){
   return( 
    <div className=" w-[80%] container mx-auto mt-20"> 
            <h1 className="font-bold text-3xl font-serif">Shop Groceries on Instamart</h1> 
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-5">  
                    {  
                        GroceryGridCard.map((item)=> (<GroceryCard  key={item.id} foodData={item}/>)) 
                    }  
            </div>  
    </div> 
   )
}    