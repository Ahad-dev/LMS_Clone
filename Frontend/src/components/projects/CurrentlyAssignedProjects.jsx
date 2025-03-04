import React from 'react'
import ProjectCard from './ProjectCard'
import {motion} from 'framer-motion'

const PROJECTS = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Project 1 Description',
        status: 'In Progress',
        assignee: 'John Doe',
        dueDate: '2022-01-01',
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Project 2 Description',
        status: 'In Progress',
        assignee: 'Jane Doe',
        dueDate: '2022-01-01',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Project 3 Description',
        status: 'In Progress',
        assignee: 'John Doe',
        dueDate: '2022-01-01',
    },
    ]


const CurrentlyAssignedProjects = () => {
  return (
    <motion.div 
    initial={{y:40,opacity:0,scale:0.8}}
    animate={{y:0,opacity:1,scale:1}}
    transition={{duration:0.5,delay:0.7}}
    
    className='p-6 rounded-lg bg-white shadow-lg '>
        <h1 className='text-2xl text-gray-600 font-semibold'>Currently Assigned Projects</h1>
        <div className='flex gap-5 items-center mt-4'>
        {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
        </div>
    </motion.div>
  )
}

export default CurrentlyAssignedProjects