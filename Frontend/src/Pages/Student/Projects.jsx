import React from 'react'
import Header from '../../components/Header'
import CurrentlyAssignedProjects from '../../components/projects/CurrentlyAssignedProjects'
import CurrentlyAssignedAssignments from '../../components/projects/CurrentlyAssignedAssignments'

const Projects = () => {
  return (
    <div className='flex-1 bg-gradient-to-br overflow-auto from-white to-gray-200 shadow-lg rounded-xl p-6 space-y-6 '>
      <Header title='Projects' />
      <CurrentlyAssignedProjects />
      <CurrentlyAssignedAssignments />
    </div>
  )
}

export default Projects