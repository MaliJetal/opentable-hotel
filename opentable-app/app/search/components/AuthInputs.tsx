import React from "react";

interface AuthInputsProps {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
}

export default function AuthInputs({ inputs }: AuthInputsProps) {
  return (
    <div>
      <div className='m-3 flex justify-between text-sm'>
        <input
          type='text'
          className='border rounded p-2 py-3 w-[49%]'
          placeholder='First Name'
          value={inputs.firstName}
        />
        <input
          type='text'
          className='border rounded p-2 py-3 w-[49%]'
          placeholder='Last Name'
          value={inputs.lastName}
        />
      </div>
      <div className='m-3 flex justify-between text-sm'>
        <input
          type='text'
          className='border rounded p-2 py-3 w-full'
          placeholder='Email'
          value={inputs.email}
        />
      </div>
      <div className='m-3 flex justify-between text-sm'>
        <input
          type='text'
          className='border rounded p-2 py-3 w-[49%]'
          placeholder='Phone'
          value={inputs.phone}
        />
        <input
          type='text'
          className='border rounded p-2 py-3 w-[49%]'
          placeholder='City'
          value={inputs.city}
        />
      </div>
      <div className='m-3 flex justify-between text-sm'>
        <input
          type='password'
          className='border rounded p-2 py-3 w-full'
          placeholder='Password'
          value={inputs.password}
        />
      </div>
    </div>
  );
}
