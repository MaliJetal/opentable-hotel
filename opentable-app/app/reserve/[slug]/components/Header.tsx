import React from "react";

export default function Header() {
  return (
    <div>
      <h3 className='font-bold'>Youre almost done!</h3>
      <div className='mt-5 flex'>
        <img
          src='https://images.otstatic.com/prod1/49153814/2/medium.jpg'
          alt=''
          className='w-32 h-18 rounded'
        />
        <div className='ml-4'>
          <h1 className='text-3xl font-bold'>AiƒÅna Restaurant Collective</h1>
          <div className='flex mt-3'>
            <p className='mr-6'>Tues, 22, 2023</p>
            <p className='mr-6'>7:30 PM</p>
            <p className='mr-6'>3 people</p>
            <p className='mr-6'>4 people</p>
          </div>
        </div>
      </div>
    </div>
  );
}