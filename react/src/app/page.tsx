'use client';
import { useState } from 'react';
import shrekAdjetives from './shrek_adjetives.json';
import Image from 'next/image';
export default function Home() {
  const adjetives = shrekAdjetives;
  const [currentAdjetive, setCurrentAdjetive] = useState(adjetives[0]);

  const onCLick = () => {
    const currentIndex = adjetives.findIndex((val) => val == currentAdjetive);
    if (currentIndex == adjetives.length - 1) setCurrentAdjetive(adjetives[0]);
    else setCurrentAdjetive(adjetives[currentIndex + 1]);
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='text-xl '>
        {' '}
        I&apos;m <span className='text-emerald-500'>{currentAdjetive}</span>
      </h1>
      <button
        onClick={onCLick}
        className='p-2 px-4 bg-slate-200 rounded-xl hover:bg-slate-100 transition-all cursor-pointer  '
      >
        {' '}
        Click
      </button>

      <Image
        src='https://static.wikia.nocookie.net/shrek/images/3/3f/Portada_img.jpg/revision/latest?cb=20100719002911&path-prefix=es'
        alt='Shrek'
        width={500}
        height={500}
      ></Image>
    </div>
  );
}
