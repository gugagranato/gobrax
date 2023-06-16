'use client'
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { DialogComponent } from '../Dialog';

function Header() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <section className='max-h-[42rem] justify-between grid grid-cols-5 gap-8'>
      <div className='col-span-5 md:col-span-3 gap-4 flex flex-col px-8 lg:px-[10rem] text-black'>
        <div className='bg-cover'>
          <Image
            src="/logo.png"
            alt="Imagem de Dispositivos"
            width={300}
            height={140}
            className='mt-5 w-[158px] h-[54px] md:w-[385px] md:h-[142px]'
          />
        </div>
        <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold	max-w-[769px]'>Turbine com alta performance
          a sua gestão de frota!</h1>
        <h1 className='text-base	md:text-lg lg:text-xl font-normal mb-4	max-w-[769px]'>Conte com o software especialista da gobrax e ganhe em eficiência, controle de combustível e redução de custos.</h1>
        <div className='flex md:hidden col-span-2 justify-center items-center'>
          <Image
            className='m-4'
            src="/mockups.png"
            alt="Imagem de Dispositivos"
            style={{ height: 'max-content' }}
            width={321}
            height={233}
          />
        </div>
        <div className='flex justify-center md:justify-start'>
          <a href="#calculator" className="flex justify-center items-center mb-6 bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full max-w-[50%] min-w-[320px] min-h-[50px]">
            SIMULE AGORA
          </a>
        </div>
      </div>
      <div className='hidden md:flex col-span-2 bg-cover justify-center items-center' style={{ backgroundImage: 'url(./bg-mockups.png)' }}>
        <Image
          className='m-4'
          src="/mockups.png"
          alt="Imagem de Dispositivos"
          style={{ height: 'max-content' }}
          width={600}
          height={450}
        />
      </div>
    </section>
  )
}

export default Header;