import dayjs from 'dayjs'
import React , {useContext, useState,useEffect} from 'react'
import Month from './Month';
import GlobalContext from '../context/GlobalContext';

export default function Day({day , rowIdx}) {
  function getCurrentDayClass(){
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") // to mark the current day
        ? 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white rounded w-7 ' 
        : " ";
    }
  const {
        setDaySelected,
        setShowEventModal,
        setSelectedEvent,
        savedEvents,  
      } = useContext(GlobalContext);

    const [dayEvents, setDayEvents] = useState([]);
    
    useEffect(() => {
      const events = savedEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
      setDayEvents(events)
    },[savedEvents, day]);
   

    


  return (
    <div className="border-2 border-black flex flex-col">
        <header className="flex flex-col items-center ">
            {rowIdx === 0 && ( // in order to only display DAY on first row
                <p className="text-sm mt-1 font-bold text-base border-b-4 border-orange-500 ">
                    {day.format('dddd').toUpperCase()}
                </p>
            )}
        
             <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
            {day.format('DD')}
        </p>
        </header>
        <div className='flex-1 cursor-pointer' onClick={() =>  {
          setDaySelected(day);
          setShowEventModal(true);
        }}>
          {dayEvents.map((evt,idx) => (
            <div
            key={idx} 
            onClick={() => setSelectedEvent(evt)}
            className={`border-x-8 border-orange-500 shadow-sm p-1 mr-1 ml-1 text-black text-sm rounded mb-1 truncate hover:bg-white` }
            > 
              {evt.title}
              </div>
          ))} 

        
      </div> 
    </div>

  )
}
