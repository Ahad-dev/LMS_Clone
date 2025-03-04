import Header from "../../components/Header"
import { motion } from 'framer-motion'
import AttendanceChart from "../../components/overview/AttendanceChart"
import AttendanceTrend from "../../components/overview/AttendanceTrend"
import EnrolledCourses from "../../components/overview/EnrolledCourses"
import WelcomeMessage from "../../components/overview/WelcomeMessage"
import ThisMonthAttendanceStat from "../../components/overview/ThisMonthAttendanceStat"
import UncommingDeadlines from "../../components/overview/UncommingDeadlines"
import StudentNav from "../../components/overview/StudentNav"
import TimeTable from "../../components/overview/TimeTable"
import EventsToCome from "../../components/overview/EventsToCome"

const Overview = () => {
  return (
    <div className='flex-1 p-6 space-y-5 rounded-xl shadow-xl overflow-y-auto max-h-[95vh] bg-gradient-to-br from-white to-gray-200 '>
      <StudentNav/>
      <WelcomeMessage/>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-3 ">
        <ThisMonthAttendanceStat/>
        <UncommingDeadlines/>
      </div>
      <TimeTable/>
      <AttendanceTrend/>
      <EventsToCome/>
    </div>
  )
}

export default Overview