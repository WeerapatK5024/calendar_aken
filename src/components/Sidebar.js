import React ,{useContext}from 'react'
import CreateEventButton from './CreateEvenButton'
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';


export default function Sidebar() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)
  function handleReset(){
    setMonthIndex(dayjs().month());
}
function handlePrevMonth(){
  setMonthIndex(monthIndex-1);
}
function handleNextMonth(){
  setMonthIndex(monthIndex+1);
}
  return (
    <aside className="border-2 border-black p-5 w-64">
      <div className='mb-3 '>
        <button onClick={handlePrevMonth}>
        <span className=' cursor-pointer mx-2 font-bold bg-gradient-to-l from-yellow-500 via-orange-500 to-red-500 rounded p-1 hover:border-l-8 hover:border-black'>
            Previous
        </span>
        </button>
        <button onClick={handleNextMonth}>
        <span className='cursor-pointer mx-3 font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded p-1 hover:border-r-8 hover:border-black'>
            Next
        </span>
        </button>
        </div>
      <button onClick={handleReset} className="border-y-4 border-black p-2 flex items-center shadow-md hover:border-y-orange-500 static hover:font-bold mb-2">
      <span className='pl-3 pr-7 '>
        Go to Today
      </span> 
      </button>
    <CreateEventButton/>
    {/* <SmallCalendar/> */}
    
    </aside>
  )
}
