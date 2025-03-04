import React from 'react'
import Header from '../../components/Header'
import ProfileEdit from '../../components/settings/ProfileEdit'

const Setting = () => {
  return (
    <div className='flex-1 bg-gradient-to-br from-white to-gray-200 rounded-lg shadow-lg p-6 space-y-6 '>
      <Header title={"Settings"}/>
      <ProfileEdit/>
    </div>
  )
}

export default Setting