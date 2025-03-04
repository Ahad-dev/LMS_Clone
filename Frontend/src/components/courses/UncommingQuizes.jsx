import React from 'react'
import {motion} from 'framer-motion'
import QuizCard from './QuizCard';

const uncommingQuizes = [
    {
        quizName: 'Quiz 1',
        course: 'Mathematics',
        date: '12/10/2021',
        status: 'Your Choice'
    },
    {
        quizName: 'Quiz 2',
        course: 'Physics',
        date: '15/10/2021',
        status: 'Modrate'
    },
    {
        quizName: 'Quiz 3',
        course: 'Chemistry',
        date: '20/10/2021',
        status: 'Your Choice'
    },
    {
        quizName: 'Quiz 4',
        course: 'Biology',
        date: '25/10/2021',
        status: 'Important'
    },
]


const UncommingQuizes = () => {
  return (
    <motion.div 
    initial={{y:40,opacity:0,scale:0.8}}
    animate={{y:0,opacity:1,scale:1}}
    transition={{duration:0.5,delay:0.7}} className='bg-white backdrop-blur-lg rounded-lg shadow-lg p-6 h-96 overflow-auto border-gray-500/20'>
        <h1 className='text-2xl font-semibold text-gray-600 mb-6'>Uncomming Courses</h1>
        <div className='flex gap-3 flex-col'>
            {uncommingQuizes.map((data, index) => (
                <QuizCard data={data} index={index} key={index}/>
            ))}
        </div>
    </motion.div>
  )
}

export default UncommingQuizes