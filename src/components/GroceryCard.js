import { GrocerGridCard } from "../Utils/Grocery";
import Grocery from "../Utils/Grocery";

export default function GroceryCard(){

    <div className=""> 
        <a href={foodData?.action?.link}> 
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+GrocerGridCard?.imageId}> 
          </img> 
          <h1 className=""> {GrocerGridCard?.action?.text} </h1>
        </a>
    </div>
} 
