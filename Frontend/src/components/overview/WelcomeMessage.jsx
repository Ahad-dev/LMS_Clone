import React from 'react'
import {motion} from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.div
    initial={{scale:0.6,opacity:0}}
    animate={{scale:1,opacity:1}}
    transition={{duration:0.5,delay:0.5}} className='flex justify-between items-center bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg px-5 shadow-lg shadow-purple-500/80'>
        <div>
            <h1 className='text-5xl text-white font-bold mb-3'>Welcome back, <span className='text-5xl'>John Doe</span></h1>
            <p className='text-white text-opacity-80'>Here's a quick overview of your progress</p>
        </div>
        
        <img src="/StudentDashboard.png" alt="LOH" className='w-48' />
    </motion.div>
  )
}

export default WelcomeMessage