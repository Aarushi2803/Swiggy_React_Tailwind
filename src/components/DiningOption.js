import dineoutRestaurants from "../Utils/DineData";
import DiningCard from "./DiningCard";

export default function DiningOption(){
     return (
        <div className="w-[80%] mx-auto mt-20 mb-20">
          <p className="font-bold text-3xl font-serif">Discover best restaurants in Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5 ">
                  {
                     dineoutRestaurants.map((data)=><DiningCard key={data.info.id} dineoutRestaurants={data} ></DiningCard>)
                  }
            </div>
        </div>
     )
}
