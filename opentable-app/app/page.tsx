import React from "react";
import { PRICE, Location, Cuisine, Review } from "@prisma/client";
import { Cards, Header } from "./components";
import { PrismaClient } from "@prisma/client";

export interface RestaurantCardProps {
  id: number;
  price: PRICE;
  name: string;
  location: Location;
  cuisine: Cuisine;
  main_image: string;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();
const fetchRestaurants = async (): Promise<RestaurantCardProps[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      main_image: true,
      name: true,
      cuisine: true,
      price: true,
      location: true,
      slug: true,
      reviews: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        {restaurants.map((restaurant) => (
          <Cards restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
