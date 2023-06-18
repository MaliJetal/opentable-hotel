import React, { useState } from "react";
import { Cards, Header } from "./components";

export default function Home() {
  return (
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
  );
}
