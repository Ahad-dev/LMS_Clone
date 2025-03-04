import React from 'react'

const PROFILE_DETAILS = [
    {
        id: 1,
        title: 'Name',
        value: 'Muhammad Ahad'
    },
    {
        id: 2,
        title: 'Email',
        value: 'muhammadahad4566@gmail.com',
    },
    {
        id: 3,
        title: 'Phone',
        value: '03123456789',
    },
    {
        id: 4,
        title: 'Address',
        value: 'Lahore, Pakistan',
    },
    {
        id: 5,
        title:

        'Date of Birth',
        value: '12-12-1999',
    },
]

const ProfileEdit = () => {
  return (
    <div className='bg-white p-6 shadow-lg rounded-md flex'>
        <div className='flex flex-col justify-between items-center gap-4'>
            <div className='w-24 h-24 bg-blue-500 rounded-md overflow-hidden shadow-md'>
                <img src="/Profile.png" alt="Profile" />
            </div>
            <div className='flex flex-col justify-between gap-2'>
                <h1 className='text-gray-600 font-semibold text-2xl'>Muhammad Ahad</h1>
                <button className='p-2 bg-blue-200 border border-blue-600 text-blue-600 rounded-md shadow-lg shadow-blue-500/20 hover:scale-105 transition-all'>Change Profile Pic</button>
            </div>
        </div>
        <div className='flex flex-col gap-4 ml-6 flex-1'>
            {PROFILE_DETAILS.map(detail => (
                <div key={detail.id} className='flex justify-between items-center border-b border-gray-500/20 pb-2'>
                    <h1 className='text-gray-600 font-semibold'>{detail.title}</h1>
                    <h1 className='text-gray-500'>{detail.value}</h1>
                </div>
            ))}
            <button className='p-2 bg-blue-200 border border-blue-600 text-blue-600 rounded-md shadow-lg shadow-blue-500/20 hover:scale-105 transition-all'>Edit Profile</button>
        </div>

    </div>
  )
}

export default ProfileEdit