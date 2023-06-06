import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RestaurantCar from "./components/RestaurantCard";
import SearchSidebar from "./components/SearchSidebar";

export default function Search() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navbar />
        <Header />
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          <SearchSidebar />
          <div className='w-5/6'>
            <RestaurantCar />
          </div>
        </div>
      </main>
    </main>
  );
}
