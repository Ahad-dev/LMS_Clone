import React from 'react'
import { Bell, BellRing, Search } from 'lucide-react'
import Avatar from '../Avatar'
import {motion} from 'framer-motion'

const StudentNav = () => {
  return (
    <motion.div
    initial={{scale:0.8,y:50,opacity:0}}
    animate={{scale:1,y:0,opacity:1}}
    transition={{duration:1}}

    className='flex justify-between items-center'>
        <div className='relative'>
            <input type="text" placeholder='Search...' className='pl-10 rounded-lg bg-gray-200/50 shadow-md  outline-none p-2 ' />
            <Search className='absolute top-2 left-2 text-purple-500'/>
        </div>
        <div className='flex gap-4 items-center'>
          <Bell className='w-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-all hover:scale-105'/>
          <Avatar/>
        </div>
    </motion.div>
  )
}

export default StudentNav