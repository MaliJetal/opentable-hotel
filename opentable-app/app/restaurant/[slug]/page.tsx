import Title from "./components/Title";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import Rating from "./components/Rating";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface RestaurantProps {
  id: number;
  name: string;
  description: string;
  slug: string;
  images: string[];
  reviews: Review[];
}

const fetchRestaurantBySlug = async (
  slug: string
): Promise<RestaurantProps> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      slug: true,
      images: true,
      reviews: true,
    },
  });
  if (!restaurant) {
    notFound();
  }
  return restaurant;
};

export default async function restaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavbar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className='w-[27%] relative text-reg'>
        <div className='fixed w-[15%] bg-white rounded p-3 shadow'>
          <div className='text-center border-b pb-2 font-bold'>
            <h4 className='mr-7 text-lg'>Make a Reservation</h4>
          </div>
          <div className='my-3 flex flex-col'>
            <label htmlFor=''>Party size</label>
            <select name='' className='py-3 border-b font-light' id=''>
              <option value=''>1 person</option>
              <option value=''>2 people</option>
            </select>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-[48%]'>
              <label htmlFor=''>Date</label>
              <input type='text' className='py-3 border-b font-light w-28' />
            </div>
            <div className='flex flex-col w-[48%]'>
              <label htmlFor=''>Time</label>
              <select name='' id='' className='py-3 border-b font-light'>
                <option value=''>7:30 AM</option>
                <option value=''>9:30 AM</option>
              </select>
            </div>
          </div>
          <div className='mt-5'>
            <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'>
              Find a Time
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
