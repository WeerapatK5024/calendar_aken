import React ,{useContext}from 'react'
import CreateEventButton from './CreateEvenButton'
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

export default function Sidebar() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)
  function handleReset(){
    setMonthIndex(dayjs().month());
}
  return (
    <aside className="border p-5 w-64">
    
      <button onClick={handleReset} className="border-y-4 mb-2 p-2   flex items-center shadow-md hover:border-2">
      <span className='pl-3 pr-7'>
        Go to Today
      </span> 
      </button>
    <CreateEventButton/>
    
    </aside>
  )
}
