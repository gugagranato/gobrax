import React, { useEffect, useState } from 'react';

function CardComponent({ values, isConnectedTruck = false }) {
  return (
    <div className="w-full flex flex-col items-center bg-white bg-contain border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-50 ">
      <div className="flex flex-col justify-between p-10 leading-normal">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{isConnectedTruck ? 'Frotas conectadas' : 'Frotas desconectadas'}</h1>
        <div>
          <h2 className='text-lg font-semibold'>{!isConnectedTruck ? 'Gasto anual' : 'Lucro anual'}</h2>
          <p className={`mb-3 text-xl md:text-3xl font-bold ${isConnectedTruck ? 'text-[#40D81B]' : 'text-red-500'}`}>
            {values.yearly || 'R$ 0,00'}
          </p>
        </div>
        <div>
          <h2 className='text-lg font-semibold'>{!isConnectedTruck ? 'Gasto mensal' : 'Lucro mensal'}</h2>
          <p className={`mb-3 text-xl md:text-3xl  font-bold ${isConnectedTruck ? 'text-[#40D81B]' : 'text-red-500'}`}>
            {values.monthly || 'R$ 0,00'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardComponent;