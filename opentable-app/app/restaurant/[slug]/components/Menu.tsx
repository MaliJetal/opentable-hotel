import React from "react";
import { Item } from "@prisma/client";

import Menucard from "./Menucard";

export default function Menu({ menu }: { menu: Item[] }) {
  return (
    <main className='bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        {menu.length ? (
          <div className='flex flex-wrap justify-between'>
            {menu.map((item) => (
              <Menucard item={item} />
            ))}
          </div>
        ) : (
          <div className='flex flex-wrap justify-between'>
            <p>The restauarnt does not have a menu.</p>
          </div>
        )}
      </div>
    </main>
  );
}
