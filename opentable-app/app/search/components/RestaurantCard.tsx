import Price from "../../components/Price";
import Link from "next/link";
import { RestaurantCardProps } from "../../page";
import { calReviewRatingAvg } from "../../../utils/calReviewRatingAvg";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantCardProps;
}) {
  const renderRatingText = () => {
    const ratings = calReviewRatingAvg(restaurant.reviews);
    if (ratings > 4) return "Awesome";
    else if (ratings <= 4 && ratings > 3) return "Good";
    else if (ratings <= 3 && ratings > 2) return "Average";
    else return 0;
  };
  return (
    <div className='border-b flex pb-5 ml-4'>
      <img src={restaurant.main_image} alt='' className='w-44 h-36 rounded' />
      <div className='pl-5'>
        <h2 className='text-3xl'>{restaurant.name}</h2>
        <div className='flex items-start'>
          <div className='flex mb-2'>*****</div>
          <p className='ml-2 text-sm'>{renderRatingText()}</p>
        </div>
        <div className='mb-9'>
          <div className='font-light flex text-reg'>
            <Price price={restaurant.price} />
            <p className='mr-4 capitalize'>{restaurant.cuisine.name}</p>
            <p className='mr-4 capitalize'>{restaurant.location.name}</p>
          </div>
        </div>
        <div className='text-red-600'>
          <Link href={`restaurant/{restaurant.slug`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
