import React from 'react'
import {motion} from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.div
    initial={{scale:0.6,opacity:0}}
    animate={{scale:1,opacity:1}}
    transition={{duration:0.5,delay:0.5}} className='w-56 p-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg px-5 shadow-lg shadow-purple-500/80'>
            <h1 className='text-5xl text-white font-bold mb-3 text-center'>Courses</h1>
        
    </motion.div>
  )
}

export default WelcomeMessage