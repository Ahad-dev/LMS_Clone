import React from 'react'
import {motion} from 'framer-motion'

const ProjectCard = ({project}) => {
  return (
    <motion.div
    initial={{y:40,opacity:0,scale:0.8}}
    animate={{y:0,opacity:1,scale:1}}
    transition={{duration:0.5,delay:1}}
    className='p-3 rounded-md bg-gradient-to-tl from-purple-700 to-indigo-500'>
        <h1 className='text-lg text-white font-semibold'>{project.title}</h1>
        <div className='flex items-center justify-between mt-3 gap-5'>
            <span className='text-xs text-gray-900 font-semibold'><span className='text-white'>Due Date : </span>{project.dueDate}</span>
            <button className='px-2 py-1 hover:scale-105 transition-all bg-white text-xs text-gray-600 font-semibold rounded-md'>Details</button>
        </div>
    </motion.div>
  )
}

export default ProjectCard