import React from 'react'
import { LucideChartBarDecreasing } from 'lucide-react'
import { motion } from 'framer-motion'

const ENROLLED_COURSES = [
    {
        title:"Wen Development",
        instructor:"John Doe",
        duration:"6 weeks",
        
    },
    {
        title:"Mobile Development",
        instructor:"Jane Doe",
        duration:"4 weeks",
    },
    {
        title:"Data Science",
        instructor:"John Doe",
        duration:"8 weeks",
    },
    {
        title:"Machine Learning",
        instructor:"Jane Doe",
        duration:"10 weeks",
    },
    {
        title:"Artificial Intelligence",
        instructor:"John Doe",
        duration:"12 weeks",
    },
]

const EnrolledCourses = () => {
  return (
    <div

    className='bg-white shadow-lg rounded-lg p-6 '>
        <h1 className='text-xl font-semibold text-gray-600'>Enrolled Courses</h1>
        <div className='flex flex-wrap gap-3 mt-6'>
            {ENROLLED_COURSES.map((course, index) => (
                <motion.div
                    initial={{ scale: 0.6, opacity: 0}}
                    animate={{ scale:1,opacity: 1}}
                    transition={{duration: 0.5,ease:'linear',delay:index*0.1,}}

                key={index} className='min-w-56 flex-1 bg-white border shadow-lg rounded-lg p-6 text-gray-600 hover:border-purple-600 flex flex-col gap-4 hover:scale-105 transition-all hover:bg-purple-500 hover:text-white'>
                    <div>

                        <h1 className='text-lg font-semibold'>{course.title}</h1>
                        <p className='text-sm '>{course.instructor}</p>
                        <p className='text-sm '>{course.duration}</p>
                    </div>

                    <button className='flex justify-center items-center gap-3 bg-green-500 py-2 px-4 rounded-md text-white hover:scale-105 transition-all'>Details <LucideChartBarDecreasing size={20}/></button>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default EnrolledCourses