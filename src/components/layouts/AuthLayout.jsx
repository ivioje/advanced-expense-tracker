import React from 'react'
import { LuTrendingDown } from 'react-icons/lu';
import dashboard_image from '../../assets/images/dashboard.svg';

const AuthLayout = ({ children }) => {
  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 z-50'>
            <h2 className='text-4xl font-black text-black'>Bold<span className='text-violet-700'>Ex</span></h2>
            {children}
        </div>

        <div className='hidden md:block z-10 w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat justify-end relative shadow-2xl shadow-fuchsia-200'>
            <div className='w-14 h-14 rounded-[40px] bg-purple-600 absolute top-7 -right-6 z-0' />
            <div className='w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10' />
            {/* <div className='w-48 h-56 rounded-[40px] bg-purple-600 absolute bottom-0 -left-5 z-1' /> */}

            <div className='grid grid-cols-1 z-20'>
                <StatsInfoCard title='Track Your Income' value='$10,000' icon={<LuTrendingDown />}  />
            </div>

            <div className='flex justify-center'>
                <img src={dashboard_image} className='w-48 h-auto lg:w-[80%] absolute bottom-10 shadow-lg shadow-blue-400/15' />
            </div>

        </div>

    </div>
  )
}

export default AuthLayout

const StatsInfoCard = ({ title, value, icon }) => {
  return (
    <div className='flex items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-4'>
      <div className='text-2xl text-purple-600'>
        {icon}
      </div>
      <div>
        <h3 className='text-sm font-semibold text-gray-700'>{title}</h3>
        <p className='text-lg font-bold text-gray-900'>{value}</p>
      </div>
    </div>
  )
}