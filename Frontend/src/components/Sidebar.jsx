import { BookOpen, ChartNoAxesColumn, FolderKanban, LogOut, Menu, Settings } from "lucide-react"
import { useEffect, useState } from "react"
import { color, motion } from "framer-motion"
import { path, use } from "framer-motion/client"
import { Link, useResolvedPath } from "react-router-dom"

const NAV_LINKS = [
    {
        label:"Overview",
        icon:ChartNoAxesColumn,
        color:"#d1d1d1",
        path:"/",

    },
    {
        label:"Courses",
        icon:BookOpen,
        color:"#A7b5f1",
        path:"/courses",
    },
    {
        label:"Projects",
        icon:FolderKanban,
        color:"#EC4899",
        path:"/projects",
    },
    {
        label:"Settings",
        icon:Settings,
        color:"#6EE7B7",
        path:"/settings",
    },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {pathname} = useResolvedPath();

  console.log(pathname)
  const handleClick=()=>{

  }


  return (
    <motion.div
      initial={{ width: 80, y:100,opacity:0 }}
      animate={{ width: isOpen ? 256 : 80,y:0,opacity:1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className={`sticky top-0 h-[95vh] ${isOpen?"w-48":"w-20"} rounded-xl shadow-xl shadow-purple-500 p-3 bg-gradient-to-b from-purple-500 to-purple-700 `}>
      <div className='flex flex-col justify-between h-full text-gray-200'>
        <div className="ml-2 h-10 w-10 flex justify-center items-center rounded-full hover:bg-black/20 transition-colors cursor-pointer ">
          <Menu className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className='flex flex-col gap-5'>
          {NAV_LINKS.map((link, index) => (
            <Link to={link.path} key={index} onClick={handleClick} style={{color:link.color}} className='overflow-hidden relative flex items-between gap-2 p-2 rounded-md hover:bg-black/20 cursor-pointer'>
              {link.path==pathname&&<motion.div
              initial={{opacity:0,height:0}}
              animate={{opacity:1,height:25}}
              transition={{duration:0.5}}
              className="absolute w-[2px] h-6 " style={{backgroundColor:link.color}}></motion.div>}
              <link.icon className="min-w-10" />
              <span>{isOpen&&link.label}</span>
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-2 p-2 rounded-md hover:bg-purple-600 cursor-pointer'>
          <LogOut className="min-w-10" />
          <span>{isOpen&&"Logout"}</span>
          </div>
      </div>
    </motion.div>
  )
}

export default Sidebar