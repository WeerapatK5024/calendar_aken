import dayjs from 'dayjs';
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import './CalendarHeadder.css'

export default function CalendarHeadder() {
    const {monthIndex, setMonthIndex} = useContext(GlobalContext)
    function handlePrevMonth(){
        setMonthIndex(monthIndex-1);
    }
    function handleNextMonth(){
        setMonthIndex(monthIndex+1);
    }
 
  return (
    <div className="px-4 py-2 flex items-center">
        <h1 className="rainbow rainbow_text_animated">
            My Calendar!
        </h1>
        <div className='prev cursor-pointer' onClick={handlePrevMonth}>
            Prev
        </div>
    <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
        </span>
    </button>
    <div className='next cursor-pointer' onClick={handleNextMonth}>
            Next
        </div>
    <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
        </span>
    </button>
    <p1 className ='ml-6 text-gray-500'>
        Current month :
    </p1>
    <h2 className='ml-1 text-xl text-orange-600 font-bold'>
        
        {dayjs(new Date(dayjs().year(),monthIndex)).format("MMMM YYYY")}
    </h2>
    </div>
  )
}
