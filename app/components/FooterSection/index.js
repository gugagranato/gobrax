'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { DialogComponent } from '../Dialog';
import { DialogDetailsComponent } from '../DialogDetails';

function FooterSection() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <section className='pt-8 md:pt-20 bg-slate-100'>
      <div className='px-8 lg:px-[10rem]'>
        <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold text-black '>
          Obter o melhor da frota agora é sua escolha
        </h1>
        <p className="text-black mt-2 md:mt-12 text-sm lg:text-xl max-w-[880px] mb-1">
          Não importa a marca ou operação, a gobrax atende. Cada litro economizado é uma chance de oferecer melhores propostas aos seus clientes, reduzir custos e aumentar o lucro.
        </p>
        <div className='flex justify-center md:justify-start mt-10 md:mt-16'>
          <button onClick={openModal} className="mb-6 bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-full max-w-[50%] min-w-[320px] min-h-[50px]">
            AGENDAR DEMONSTRAÇÃO
          </button>
        </div>
        <div className='mt-16 md:mt-48 mb-10 flex items-center'>
          <Image
            src="/logo.png"
            height={71}
            width={203}
            alt="Gobrax"
            className='h-[25px] w-[72px] md:h-[71px] md:w-[203px] mr-4 md:mr-11'
          />
          <div className='px-4 md:px-11 border-l-2 md:border-l-4 border-black'>
            <span className='text-black text-xs md:text-xl lg:text-3xl font-bold'>
              Conectividade oficial
            </span>
          </div>
          <div>
            <Image
              src="/daf-footer.png"
              width={203}
              height={65}
              alt={'DAF logo'}
              className="h-[23px] w-[72px] md:w-[203px] md:h-[65px]"
            />
          </div>
        </div>
      </div>
      <DialogDetailsComponent isOpen={isOpen} closeModal={closeModal} />
    </section>
  )
}

export default FooterSection;