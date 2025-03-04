import { Bar,ResponsiveContainer,Tooltip,Legend,CartesianGrid,YAxis,XAxis,BarChart } from 'recharts';

const data = [
    {
        name: "January",
        Present: 20,
        Absent: 1 // January has 31 days, but let's assume 21 working/school days
    },
    {
        name: "February",
        Present: 18,
        Absent: 2 // February has 29 days (leap year), assuming 20 working days
    },
    {
        name: "March",
        Present: 22,
        Absent: 0 // March has 31 days, assuming 22 working days
    },
    {
        name: "April",
        Present: 21,
        Absent: 1 // April has 30 days, assuming 22 working days
    },
    {
        name: "May",
        Present: 20,
        Absent: 2 // May has 31 days, assuming 22 working days
    },
    {
        name: "June",
        Present: 19,
        Absent: 3 // June has 30 days, assuming 22 working days
    },
    {
        name: "july",
        Present: 16,
        Absent: 5 // June has 30 days, assuming 22 working days
    },
    {
        name: "August",
        Present: 12,
        Absent: 9 // June has 30 days, assuming 22 working days
    },
    {
        name: "September",
        Present: 18,
        Absent: 2 // June has 30 days, assuming 22 working days
    },
];

//Color For Chart
const COLOR = {
    present: 'rgb(54, 162, 235)',
    absent: 'rgb(255, 99, 132)',
};


const AttendanceTrend = () => {
  return (

    <div className='h-96 rounded-xl bg-purple-500 hover:shadow-xl hover:translate-y-1 transition-all shadow-purple-500 p-6'>
        <h1 className='text-gray-100 font-semibold text-xl'>Attendance Trend</h1>
        <ResponsiveContainer width='100%' height='80%'>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="name" 
                    stroke="#8884d8" 
                    tick={{ fill: 'white' }}
                    tickLine={{ stroke: 'white' }}
                    axisLine={{ stroke: 'white' }}
                />
                <YAxis 
                    stroke="#8884d8" 
                    tick={{ fill: 'white' }}
                    tickLine={{ stroke: 'white' }}
                    axisLine={{ stroke: 'white' }}
                />
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
                <Bar dataKey="Present" fill={COLOR.present} />
                <Bar dataKey="Absent" fill={COLOR.absent} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default AttendanceTrend