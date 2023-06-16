'use client'
import React, { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export function DialogComponent({ isOpen, closeModal }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://api.hsforms.com/submissions/v3/integration/submit/19655000/e875f536-e26a-4733-9375-90f4b5dcc3be',
        {
          fields: [
            {
              "objectTypeId": "0-1",
              "name": "firstname",
              "value": data.firstname
            },
            {
              "objectTypeId": "0-1",
              "name": "company",
              "value": data.company
            },
            {
              "objectTypeId": "0-1",
              "name": "jobtitle",
              "value": data.jobtitle
            },
            {
              "objectTypeId": "0-1",
              "name": "email",
              "value": data.email
            },
            {
              "objectTypeId": "0-1",
              "name": "phone",
              "value": data.phone
            },
            {
              "objectTypeId": "0-1",
              "name": "frota_total",
              "value": data.frota_total
            },
            {
              "objectTypeId": "0-1",
              "name": "descreve_o_principal_objetivo_da_sua_frota_empresa",
              "value": data.descreve_o_principal_objetivo_da_sua_frota_empresa
            },
          ],
          "context": {
            "pageUri": "https://calculadora.gobrax.com.br",
            "pageName": "Página de calculadora"
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Preencha os campos abaixo:
                </Dialog.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6 mt-6">
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">Digite o nome da sua empresa</label>
                    <input {...register('company')} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="jobtitle" className="block mb-2 text-sm font-medium text-gray-900">Digite o seu cargo</label>
                    <input {...register('jobtitle')} type="text" id="jobtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900">Digite o seu nome</label>
                    <input {...register('firstname')} type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Digite o seu e-mail</label>
                    <input {...register('email')} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Digite o seu número</label>
                    <input
                    {...register('phone')}
                      type="text"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="(99)99999-9999"
                      minLength={10}
                      maxLength={11}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="frota_total" className="block mb-2 text-sm font-medium text-gray-900">Quantidade de caminhões</label>
                    <input defaultValue="123" {...register('frota_total')} type="number" id="frota_total" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Descreva o principal objetivo da sua frota/empresa</label>
                    <textarea {...register('descreve_o_principal_objetivo_da_sua_frota_empresa')} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium rounded-full text-sm w-full px-5 py-2.5 text-center">Solicitar minha análise detalhada</button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
