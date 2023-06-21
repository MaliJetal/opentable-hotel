import React, { useState } from "react";
import { Cards, Header } from "./components";
import RestaurantCard, {
  RestaurantCardProps,
} from "./search/components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const fetchRestaurants = async (): Promise<[RestaurantCardProps]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      main_image: true,
      name: true,
      cuisine: true,
      price: true,
      location: true,
    },
  });

  if (!restaurants) {
    throw new Error();
  }

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  console.log("REstaurant : ", restaurants);
  return (
    <main>
      <Header />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
