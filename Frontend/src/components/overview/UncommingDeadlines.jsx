import React from 'react'
import DeadLineCard from './DeadLineCard';
import {motion} from 'framer-motion'

const upcomingDeadlines = [
    {
        taskName: "Math Assignment 3",
        dueDate: "2024-09-15",
        course: "Mathematics",
        status: "Pending",
    },
    {
        taskName: "History Project Presentation",
        dueDate: "2024-09-20",
        course: "History",
        status: "Pending",
    },
    {
        taskName: "Science Lab Report",
        dueDate: "2024-09-18",
        course: "Science",
        status: "In Progress",
    },
    {
        taskName: "Literature Essay",
        dueDate: "2024-09-25",
        course: "Literature",
        status: "Pending",
    },
    {
        taskName: "Economics Midterm Exam",
        dueDate: "2024-09-30",
        course: "Economics",
        status: "Scheduled",
    },
    {
        taskName: "Physics Quiz",
        dueDate: "2024-09-28",
        course: "Physics",
        status: "Scheduled",
    },
    {
        taskName: "Computer Science Final Project",
        dueDate: "2024-10-05",
        course: "Computer Science",
        status: "In Progress",
    }
];


const UncommingDeadlines = () => {
  return (
    <motion.div 
    initial={{y:40,opacity:0,scale:0.8}}
    animate={{y:0,opacity:1,scale:1}}
    transition={{duration:0.5,delay:0.7}} className='bg-white backdrop-blur-lg rounded-lg shadow-lg p-6 h-96 overflow-auto border-gray-500/20'>
        <h1 className='text-2xl font-semibold text-gray-600 mb-6'>Uncomming Deadlines</h1>
        <div className='flex gap-3 flex-col'>
            {upcomingDeadlines.map((data, index) => (
                <DeadLineCard data={data} index={index} key={index}/>
            ))}
        </div>
    </motion.div>
  )
}

export default UncommingDeadlines