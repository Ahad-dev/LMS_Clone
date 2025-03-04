import React from 'react'
import { Pie,ResponsiveContainer,Tooltip,Legend,PieChart,Cell } from 'recharts';
// import { AreaChart,XAxis,YAxis,ResponsiveContainer, } from 'recharts';
import { motion } from 'framer-motion'

//Attendance data
//according to total days in a month


//Color For Chart
 const COLOR = {
    present: '#22C55E',
    absent: '#EF4444',
};

const Data = [
    { name: 'Present', value: 5 },
    { name: 'Absent', value: 3 },
];
    
const AttendanceChart = () => {
  return (
    <div
        className='h-80 rounded-xl'>
        
        <ResponsiveContainer width='100%' height='80%'>
            <PieChart>
                <Pie
                    data={Data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {Data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLOR[index === 0 ? 'present' : 'absent']} />
                    ))}
                </Pie>
                <Tooltip 
                    contentStyle={{backgroundColor: 'rgba(0,0,0,0.8)',borderRadius: '5px'}}
                    labelStyle={{fontWeight: 'bold',color: 'white'}}
                    itemStyle={{color: 'white'}}
                    cursor={{fill: 'rgba(0,0,0,0.2)'}}
                />
                <Legend 
                    verticalAlign="top" 
                    height={36}
                    iconType="circle"
                    wrapperStyle={{top: 0, left: 24}}
                />
            </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart