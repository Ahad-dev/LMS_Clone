import React from 'react'
import AttendanceChart from './AttendanceChart'
import {motion} from 'framer-motion'

const ThisMonthAttendanceStat = () => {
  return (
    <motion.div 
      initial={{y:40,opacity:0,scale:0.8}}
      animate={{y:0,opacity:1,scale:1}}
      transition={{duration:0.5,delay:0.7}}

    className='bg-white rounded-lg shadow-lg  p-3 border border-gray-500/20'>
        <h1 className='text-gray-600 text-center mb-3 font-semibold text-xl'>This Month Attendace State</h1>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2  justify-center items-center'>

        <div className='space-y-3'>
            <div className='py-3 bg-green-200 border text-center border-green-600/50 rounded-xl shadow-md shadow-green-400/50'>
                <p className='font-bold text-7xl text-green-500'>5</p>
                <h1 className='font-bold text-3xl text-white drop-shadow-lg shadow-green-500'>Present</h1>
            </div>
            <div className='py-3 bg-red-200 border text-center border-red-600/50 rounded-xl shadow-md shadow-red-400/50'>
                <p className='font-bold text-7xl text-red-500'>3</p>
                <h1 className='font-bold text-3xl text-white drop-shadow-lg shadow-red-500'>Absent</h1>
            </div>
        </div>
        <AttendanceChart/>  
        </div>

    </motion.div>
  )
}

export default ThisMonthAttendanceStat