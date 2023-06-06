import React, { useState } from "react";
import Link from "next/link";
import { Navbar, Cards, Header } from "./components";

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <Navbar />
        <main>
          <Header />
          {/* CARDS */}
          <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
            {/* CARD */}
            <Cards />
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
