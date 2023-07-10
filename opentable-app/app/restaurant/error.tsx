"use client";
import React from "react";
import Image from "next/image";
import errorImg from "../../public/icons/error.png";

export default function Error({ error }: { error: Error }) {
  return (
    <div className='h-screen bg-gray flex flex-col justify-center items-center'>
      <Image src={errorImg} alt='' className='w-56 mb-8' />
      <div className='bg-white px-9 py-14 shaodw rounded'>
        <h3 className='text-3xl font-bold'>Well, this is embarrassing!</h3>
        <p className='text-reg font-bold'>{error.message}</p>
        <p className='mt-6 text-sm font-light'>Error Code: 400</p>
      </div>
    </div>
  );
}
