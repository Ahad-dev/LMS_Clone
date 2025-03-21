import React from 'react'
import {motion} from 'framer-motion'

const DeadLineCard = ({data,index}) => {
  return (
    <div
    className='p-3 min-w-96 bg-gradient-to-r from-white to-gray-200 shadow-lg rounded-lg grid grid-cols-4 justify-center'>
            <div className='col-span-2'>
                <h1 className='font-semibold text-gray-700'>{data.taskName}</h1>
                <p className='text-sm text-gray-500'>{data.course}</p>
            </div>
            <div>
                <h1 className='font-semibold text-gray-700'>Due Date</h1>
                <p className='text-sm text-gray-500'>{data.dueDate}</p>
            </div>
        <div className='flex items-center mx-auto'>
            <div className={`px-2 py-1 l border ${data.status === 'Pending' ? 'bg-yellow-200 border-yellow-500/50 text-yellow-500' : data.status === 'Scheduled' ? 'bg-blue-200 border-blue-500/50 text-blue-500' : 'bg-green-200 border-green-500/50 text-green-500'}`}>
                {data.status}
            </div>
        </div>
    </div>
  )
}

export default DeadLineCard