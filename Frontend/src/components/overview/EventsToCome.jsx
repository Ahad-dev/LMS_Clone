import React from 'react'
import { motion } from 'framer-motion'

const EVENTS = [
    {
        title: 'Event 1',
        date: '2022-07-01',
        time: '10:00',
        location: 'Location 1',
        description: 'Description 1'
    },
    {
        title: 'Event 2',
        date: '2022-07-02',
        time: '11:00',
        location: 'Location 2',
        description: 'Description 2'
    },
    {
        title: 'Event 3',
        date: '2022-07-03',
        time: '12:00',
        location: 'Location 3',
        description: 'Description 3'
    },
    {
        title: 'Event 4',
        date: '2022-07-04',
        time: '13:00',
        location: 'Location 4',
        description: 'Description 4'
    },
    {
        title: 'Event 5',
        date: '2022-07-05',
        time: '14:00',
        location: 'Location 5',
        description: 'Description 5'
    },
]

const EventsToCome = () => {
  return (
    <motion.div
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.6}}
    className='p-6 bg-white shadow-lg rounded-lg overflow-auto'>\
        <h1 className='text-3xl text-gray-600 font-semibold text-center'>Events To Come</h1>
        <div className='flex  gap-3 mt-6'>

        {EVENTS.map((event, index) => (
            <div
                key={index}
            className=' transition-all duration-300 cursor-pointer hover:scale-105 flex-wrap min-w-48 bg-white border shadow-lg rounded-lg hover:border-purple-500 hover:bg-purple-500 p-6 text-gray-600 hover:text-white'>
                <h1 className='text-xl font-semibold'>{event.title}</h1>
                <p className='text-sm '>{event.date} {event.time}</p>
                <p className='text-sm '>{event.location}</p>
                <p className='text-sm '>{event.description}</p>
        </div>
        ))}
        </div>

    </motion.div>
  )
}

export default EventsToCome