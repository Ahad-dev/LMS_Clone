import React from 'react'

const EnrolledCourses = () => {
  return (
    <div className='m-6 bg-purple-600 p-6 shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <h1 className='text-2xl text-gray-100 font-semibold'>Enrolled Courses</h1>
        <div className='hover:scale-105 transition-all min-w-48 p-6 flex justify-center items-center shadow-purple-600 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg'>
            <img className='h-32 ' src="/webDevelopment.png" alt="fa" />
            <h1 className='font-bold text-xl text-purple-200'>Object Oriented Programming</h1>


        </div>
    </div>
  )
}

export default EnrolledCourses