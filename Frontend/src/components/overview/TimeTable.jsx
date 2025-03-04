import React from 'react'
import {motion} from 'framer-motion'

const LEC_DATA = [
    [
        {name:"DLD",time:1},
        {name:"DSA",time:1,},
        {name:"LA",time:2},
        {name:"BREAK",time:1},
        {name:"DLD",time:3}
    ],
    [
        {name:"SE",time:2},
        {name:"IPS",time:2,},
        {name:"BREAK",time:1,},
        {name:"DSA-LAB",time:3},
    ],
    [
        {name:"CN-LAB",time:3},
        {name:"SE",time:1},
        {name:"BREAK",time:1},
        {name:"CN",time:2},
        {name:"FREE",time:1},
    ],
    [
        {name:"DLD",time:1},
        {name:"DSA",time:2},
        {name:"LA",time:1},
        {name:"BREAK",time:1},
        {name:"FREE",time:1},
        {name:"IPS",time:1},
        {name:"FREE",time:1},
    ],
    [
       
        {name:"HOLIDAY !!!",time:8},

    ],
    [
       
        {name:"HOLIDAY !!!",time:8},

    ],
    [
       
        {name:"HOLIDAY !!!",time:8},
        
    ]

]

const TimeTable = () => {
  return (
    <motion.div 
    initial={{y:40,opacity:0,scale:0.8}}
    animate={{y:0,opacity:1,scale:1}}
    transition={{duration:0.5,delay:0.7}} className='bg-white border border-gray-700/20 rounded-lg shadow-lg p-6'>
        <h1 className='mb-5 text-2xl font-semibold text-gray-600 text-center'>Time Table</h1>
        <table className='flex gap-2 overflow-auto'>
            <thead>

                <tr className='rounded-lg bg-gradient-to-br from-gray-100 to-slate-300 shadow-lg text-gray-700 flex flex-col divide-y-2'>
                    <th className='p-5'>Monday</th>
                    <th className='p-5'>Tuesday</th>
                    <th className='p-5'>Wednesday</th>
                    <th className='p-5'>Thursday</th>
                    <th className='p-5'>Friday</th>
                    <th className='p-5'>Saturday</th>
                    <th className='p-5'>Sunday</th>
                </tr>   
            </thead>
            <tbody className='flex-1 divide-y-2'>
                {LEC_DATA.map((lec,index)=>(
                    <tr key={index} className='grid grid-cols-8 text-center justify-center items-center h-[66px] text-xl text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg divide-x-2 min-w-[36rem] '>
                        {lec.map((data,index)=>(
                            <td className={`${data.time===1?"col-span-1":data.time===2?"col-span-2":data.time===3?"col-span-3":"col-span-8"}`}>{data.name}</td>
                        ))}
                    </tr>
                ))}

            </tbody>
        </table>
    </motion.div>
  )
}

export default TimeTable