'use client'
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import Datepicker from "react-tailwindcss-datepicker";

export function DialogDetailsComponent({ isOpen, closeModal }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [checkboxError, setCheckboxError] = useState(false);

  const onSubmit = async (data) => {
    if (!data.horario1 && !data.horario2 && !data.horario3 && !data.horario4 && !data.horario5 && !data.horario6 && !data.horario7) {
      setCheckboxError(true);
      return;
    }
    try {
      const fields = [
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: data.firstname,
        },
        {
          objectTypeId: "0-1",
          name: "company",
          value: data.company,
        },
        {
          objectTypeId: "0-1",
          name: "jobtitle",
          value: data.jobtitle,
        },
        {
          objectTypeId: "0-1",
          name: "email",
          value: data.email,
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: data.phone,
        },
        {
          objectTypeId: "0-1",
          name: "frota",
          value: data.frota_total,
        },
        {
          objectTypeId: "0-1",
          name: "qual_o_melhor_horario_",
          value: data.melhor_horario,
        },
      ];

      // Adicione apenas os checkboxes selecionados aos campos
      if (data.horario1) {
        fields.push({
          objectTypeId: "0-1",
          name: "horario",
          value: data.horario1,
        });
      }
      if (data.horario2) {
        fields.push({
          objectTypeId: "0-1",
          name: "horario",
          value: data.horario2,
        });
      }
      if (data.horario3) {
        fields.push({
          objectTypeId: "0-1",
          name: "horario",
          value: data.horario3,
        });
      }
      if (data.horario4) {
        fields.push({
          objectTypeId: "0-1",
          name: "horario",
          value: data.horario4,
        });
      }
      if (data.horario5) {
        fields.push({
          objectTypeId: "0-1",
          name: "horario",
          value: data.horario5,
        });
      }
      if (data.horario6) {
        fields.push({
          objectTypeId: "0-1",
          name: "horario",
          value: data.horario6,
        });
      }
      if (data.horario7) {
        fields.push({
          objectTypeId: "0-1",
          name: "horario",
          value: data.horario7,
        });
      }
      const response = await axios.post(
        'https://api.hsforms.com/submissions/v3/integration/submit/19655000/c6e932d7-a2e0-4ce7-971d-174937d2b92a',
        {
          fields,
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
                    <input {...register('company')} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="jobtitle" className="block mb-2 text-sm font-medium text-gray-900">Digite o seu cargo</label>
                    <input {...register('jobtitle')} type="text" id="jobtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900">Digite o seu nome</label>
                    <input {...register('firstname')} type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Digite o seu e-mail</label>
                    <input {...register('email')} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*" />
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
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="frota_total" className="block mb-2 text-sm font-medium text-gray-900">Quantidade de caminhões</label>
                    <input defaultValue="123" {...register('frota_total')} type="number" id="frota_total" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="melhor_horario" className="block mb-2 text-sm font-medium text-gray-900">Escolha uma data</label>
                    <input {...register('melhor_horario')} id="date" type="date" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="frota_total" className="block mb-2 text-sm font-medium text-gray-900">Qual melhor horário?</label>
                    <div className='row gap-2'>
                      <div class="flex items-center mr-4">
                        <input {...register('horario1')} id="yellow-checkbox" type="checkbox" value="9:00" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="9:00" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">9:00</label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input {...register('horario2')} id="yellow-checkbox" type="checkbox" value="10:00" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="10:00" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">10:00</label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input {...register('horario3')} id="yellow-checkbox" type="checkbox" value="11:00" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="11:00" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">11:00</label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input {...register('horario4')} id="yellow-checkbox" type="checkbox" value="14:00" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="14:00" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">14:00</label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input {...register('horario5')} id="yellow-checkbox" type="checkbox" value="15:00" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="15:00" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">15:00</label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input {...register('horario6')} id="yellow-checkbox" type="checkbox" value="16:00" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="16:00" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">16:00</label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input {...register('horario7')} id="yellow-checkbox" type="checkbox" value="17:00" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="17:00" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">17:00</label>
                      </div>
                      {checkboxError && (
                        <p className="text-red-500 text-sm">Selecione pelo menos uma opção.</p>
                      )}
                    </div>
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
