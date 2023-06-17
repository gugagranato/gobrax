'use client'
import FormComponent from './components/FormComponent';
import CardComponent from '../CardComponent';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';
import ReactLoading from 'react-loading';
import { useTrucks } from '@/app/context/trucksContext';

function FormSection() {
  let INITIAL_VALUES = {
    isDisconectedTruck: {
      monthly: '0',
      yearly: '0'
    },
    isConnectedTruck: {
      monthly: '0',
      yearly: '0'
    },
  }
  const { register, watch } = useForm();
  const { setTrucksQtt } = useTrucks()
  const [value, setValues] = useState(INITIAL_VALUES)
  const [profile, setProfile] = useState('Conservative')
  const [loading, setLoading] = useState(false)
  const dieselAmountWatch = watch('dieselAmount');
  const actualAveragetWatch = watch('actualAverage');
  const trucksQttWatch = watch('trucksQtt');
  const kmMonthWatch = watch('kmMonth');

  const calculate = useDebouncedCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://gateway-v3.gobrax.com.br:8889/gobrax-calculate/${dieselAmountWatch}/${actualAveragetWatch}/${trucksQttWatch}/${kmMonthWatch}/${profile}`);
      if (response.status === 200) {
        const modelValueSpent = {
          isDisconectedTruck: {
            yearly: response.data.data?.disconnected.anual,
            monthly: response.data.data?.disconnected.month,
          },
          isConnectedTruck: {
            yearly: response.data.data?.specific.anual,
            monthly: response.data.data?.specific.month,
          },
        }
        setValues(modelValueSpent)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, 1000)

  const addTrucksInContext = useDebouncedCallback(() => setTrucksQtt(trucksQttWatch), 500)

  const resetValues = useCallback(() => {
    setValues(INITIAL_VALUES)
    setLoading(false) 
  }, [])
  
  useEffect(() => {
    if (dieselAmountWatch && actualAveragetWatch && trucksQttWatch && kmMonthWatch && profile) {
      setLoading(true)
      calculate()
    } else {
      resetValues()
    }
  }, [dieselAmountWatch, actualAveragetWatch, trucksQttWatch, kmMonthWatch, profile, calculate, resetValues])

  useEffect(() => {
    addTrucksInContext()
  }, [addTrucksInContext, setTrucksQtt, trucksQttWatch])

  return (
    <section id="calculator" className='min-h-[32rem] w-full flex bg-cover bg-center ' style={{ backgroundImage: 'url(./background-section.png)' }}>
      <div className='px-8 lg:px-[10rem] py-6'>
        <h1 className='text-lg md:text-4xl font-bold	'>Calcule o quanto você perde, dia após dia, sem o assistente virtual gobrax!</h1>
        <h2 className='mt-6 text-base	md:text-3xl font-medium'>Basta preencher os campos abaixo</h2>
        {/* <FormComponent /> */}
        <div className='my-6 flex flex-col md:flex-row gap-6 lg:gap-10'>
          <div>
            <label htmlFor="input-group-1" className="block mb-2 text-sm font-semibold text-gray-900 ">Qtd de caminhões</label>
            <div className="">
              <input type="number" {...register('trucksQtt')} id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5     " placeholder="200" />
            </div>
          </div>
          <div>
            <label htmlFor="input-group-1" className="block mb-2 text-sm font-semibold text-gray-900 ">Km mensal rodado</label>
            <div className="">
              <input type="number" {...register('kmMonth')} id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5     " placeholder="200km" />
            </div>
          </div>
          <div>
            <label htmlFor="input-group-1" className="block mb-2 text-sm font-semibold text-gray-900 ">Média atual</label>
            <div className="">
              <input type="number" {...register('actualAverage')} id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5     " placeholder="12,4" />
            </div>
          </div>
          <div>
            <label htmlFor="input-group-1" className="block mb-2 text-sm font-semibold text-gray-900 ">Valor do diesel</label>
            <div className="">
              <input type="number" {...register('dieselAmount')} id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5     " placeholder="R$ 3,14" />
            </div>
          </div>
          {loading && (
            <div className='flex items-center justify-center'>
              <ReactLoading type='spin' color={'black'} height={30} width={30} />
            </div>
          )}
        </div>
        <p className='text-xl font-semibold'>Escolha o cenário econômico que deseja visualizar:</p>
        <div className='flex justify-between md:justify-start gap-2 md:gap-8 mt-2'>
          <button
            onClick={() => setProfile('Conservative')}
            type="button"
            className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-1.5 md:px-5 py-1 text-center mb-2     dark:focus:ring-gray-800 ${profile === 'Conservative' ? 'bg-gray-900 text-white' : ''}`}
          >
            Conservador
          </button>
          <button
            onClick={() => setProfile('Moderate')}
            type="button"
            className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-1.5 md:px-5 py-1 text-center mb-2     dark:focus:ring-gray-800 ${profile === 'Moderate' ? 'bg-gray-900 text-white' : ''}`}
          >
            Moderado
          </button>
          <button
            onClick={() => setProfile('HighPerformance')}
            type="button"
            className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-1.5 md:px-5 py-1 text-center mb-2     dark:focus:ring-gray-800 ${profile === 'HighPerformance' ? 'bg-gray-900 text-white' : ''}`}
          >
            Alta performance
          </button>
        </div>
        <div className='flex-col md:flex-row flex gap-12 items-center mt-8'>
          <CardComponent values={value.isDisconectedTruck} />
          <span className='text-5xl font-bold'>X</span>
          <CardComponent isConnectedTruck values={value.isConnectedTruck} />
        </div>
      </div>
    </section>
  )
}

export default FormSection;