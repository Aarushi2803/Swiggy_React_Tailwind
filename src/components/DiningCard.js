import dineoutRestaurants from "../Utils/DineData";

export default function DiningCard({dineoutRestaurants}){
    return( 
        <div className="max-w-sm flex-none ">

           <a target="_blank" href={dineoutRestaurants.cta.link}>

            <div className="relative"> 
               <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+dineoutRestaurants?.info?.mediaFiles[0]?.url}></img>

               <p className="absolute bottom-0 right-0 left-0 text-white   bg-gradient-to-t from-black to-transparent ">{dineoutRestaurants?.info?.name}</p> 
               <p className="absolute bottom-0 right-2 text-xl z-10 text-white">{dineoutRestaurants?.info?.rating?.value}</p>
             </div> 
             
            </a>
        </div>
    )
}
