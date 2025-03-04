import React from 'react'
import WelcomeMessage from '../../components/courses/WelcomeMessage'
import EnrolledCourses from '../../components/courses/EnrolledCourses'
import UncommingQuizes from '../../components/courses/UncommingQuizes'

const Courses = () => {
  return (
    <div className='flex-1 p-6 space-y-5 rounded-xl shadow-xl overflow-y-auto max-h-[95vh] bg-gradient-to-br from-white to-gray-200 '>
      <WelcomeMessage/>
      <EnrolledCourses/>
      <UncommingQuizes/>
    
    </div>
  )
}

export default Courses