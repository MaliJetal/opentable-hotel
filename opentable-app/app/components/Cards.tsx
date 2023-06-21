import { RestaurantCardProps } from "../search/components/RestaurantCard";
import Price from "./Price";

interface Props {
  restaurant: RestaurantCardProps;
}
export default function Cards({ restaurant }: Props) {
  return (
    <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <img
        src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
        alt=''
        className='w-full h-36'
      />
      <div className='p-1'>
        <h3 className='font-bold text-2xl mb-2'>{restaurant.name}</h3>
        <div className='flex items-start'>
          <div className='flex mb-2'>*****</div>
          <p className='ml-2'>77 reviews</p>
        </div>
        <div className='flex text-reg font-light capitalize'>
          <p className=' mr-3'>M{restaurant.cuisine.name}</p>
          <Price price={restaurant.price} />
          <p>{restaurant.location}</p>
        </div>
        <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
      </div>
    </div>
  );
}
