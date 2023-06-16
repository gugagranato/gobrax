import React from 'react';

function FormComponent() {
  return (
    <div className='my-6 flex flex-col md:flex-row gap-6 lg:gap-10'>
      <div>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Qtd de caminhões</label>
        <div className="">
          <input type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="200" />
        </div>
      </div>
      <div>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Km mensal rodado</label>
        <div className="">
          <input type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="200km" />
        </div>
      </div>
      <div>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Média atual</label>
        <div className="">
          <input type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12,4" />
        </div>
      </div>
      <div>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Valor do diesel</label>
        <div className="">
          <input type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="R$ 3,14" />
        </div>
      </div>
    </div>
  )
}

export default FormComponent;