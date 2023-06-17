'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { DialogComponent } from '../Dialog';
import { DialogDetailsComponent } from '../DialogDetails';
import { useTrucks } from '@/app/context/trucksContext';

function ContentSection() {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpenDetails, setIsOpenDetails] = useState(false)
  const { trucksQtt } = useTrucks()
  
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModalDetails() {
    setIsOpenDetails(false)
  }

  function openModalDetails() {
    setIsOpenDetails(true)
  }
  return (
    <section>
      <div className='px-8 lg:px-[10rem]'>
        <div className='flex justify-center md:justify-start mt-4 md:mt-8'>
          <button onClick={openModal} className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full max-w-[50%] min-w-[320px] min-h-[50px]">
            AGENDAR ATENDIMENTO
          </button>
        </div>
        <h2 className='text-gray-900 font-bold text-xl md:text-2xl lg:text-4xl mt-9 md:mt-16'>
          Rumo às 1.000 transportadoras rodando conosco!
        </h2>
        <div className='mt-5 flex flex-row justify-between items-center'>
          <Image
            src="/lunardi-logo.png"
            height={57}
            width={164}
            alt={'Lunardi'}
            className="w-[79px] h-[27px] md:h-[57px] md:w-[164px]"
          />
          <Image
            src="/tozzo-logo.png"
            height={55}
            width={102}
            alt={'Tozzo Transportes'}
            className="w-[44px] h-[24px] md:w-[102px] md:h-[55px]"
          />
          <Image
            src="/gral-logo.png"
            height={64}
            width={114}
            alt={'Transportes Gral'}
            className="w-[51px] h-[20px] md:w-[114px] md:h-[64px]"
          />
          <Image
            src="/jadimo-logo.png"
            height={64}
            width={139}
            alt={'Jadimo Transportes'}
            className="w-[63px] h-[30px] md:w-[139px] md:h-[64px]"
          />
        </div>
        {/* embeded video */}
        <div className='flex justify-center rounded-lg'>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/RmTzMVn2kQk`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className="rounded-lg"
          />
        </div>
        <div className='md:flex md:items-end mt-4'>
          <Image
            src="/transp-sulista.png"
            height={81}
            width={317}
            alt={'Transportadora Sulista'}
            className="w-[218px] md:w-[317px] aspect-auto"
          />
          <p className="text-black mt-2 text-sm lg:text-xl max-w-[800px] mb-1">
            “Nós reduzimos a nossa conta de combustível em 2017 em 18%, o que é muito bom!” <strong>Josana Teruchkin</strong>, Diretora Executiva.
          </p>
        </div>
        <div className='flex justify-center md:justify-start mt-10 md:mt-16'>
          <button onClick={openModalDetails} className="mb-6 bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full max-w-[50%] min-w-[320px] min-h-[50px]">
            OBTER ANÁLISE DETALHADA
          </button>
        </div>
      </div>
      <DialogDetailsComponent isOpen={isOpen} closeModal={closeModal} />
      <DialogComponent isOpen={isOpenDetails} closeModal={closeModalDetails} trucks={trucksQtt} />
    </section>
  )
}

export default ContentSection;