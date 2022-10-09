import dayjs from 'dayjs'
import React , {useContext, useState,useEffect} from 'react'
import Month from './Month';
import GlobalContext from '../context/GlobalContext';

export default function Day({day , rowIdx}) {
  function getCurrentDayClass(){
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") // to mark the current day
        ? 'bg-orange-600 text-white rounded-full w-7 ' 
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
    <div className="border border-gray-200 flex flex-col">
        <header className="flex flex-col items-center">
            {rowIdx === 0 && ( // in order to only display DAY on first row
                <p className="text-sm mt-1">
                    {day.format('ddd').toUpperCase()}
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
            className={`border-x-8 border-orange-200 shadow-sm p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate hover:bg-gray-200` }
            onClick={() => setSelectedEvent(evt)}> 
              {evt.title}
              </div>
          ))} 

        
      </div> 
    </div>

  )
}
// import dayjs from "dayjs";
// import React, { useContext, useState, useEffect } from "react";
// import GlobalContext from "../context/GlobalContext";

// export default function Day({ day, rowIdx }) {
//   const [dayEvents, setDayEvents] = useState([]);
//   const {
//     setDaySelected,
//     setShowEventModal,
//     filteredEvents,
//     setSelectedEvent,
//     savedEvents,
//   } = useContext(GlobalContext);

//       useEffect(() => {
//       const events = savedEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
//       setDayEvents(events)
//     },[savedEvents, day]);

//   function getCurrentDayClass() {
//     return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
//       ? "bg-blue-600 text-white rounded-full w-7"
//       : "";
//   }
//   return (
//     <div className="border border-gray-200 flex flex-col">
//       <header className="flex flex-col items-center">
//         {rowIdx === 0 && (
//           <p className="text-sm mt-1">
//             {day.format("ddd").toUpperCase()}
//           </p>
//         )}
//         <p
//           className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
//         >
//           {day.format("DD")}
//         </p>
//       </header>
//       <div
//         className="flex-1 cursor-pointer"
//         onClick={() => {
//           setDaySelected(day);
//           setShowEventModal(true);
//         }}
//       >
//         {dayEvents.map((evt, idx) => (
//           <div
//             key={idx}
//             onClick={() => setSelectedEvent(evt)}
//             className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
//           >
//             {evt.title}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }