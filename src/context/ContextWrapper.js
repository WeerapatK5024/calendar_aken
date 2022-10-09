import React , {useEffect, useState, useReducer} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function saveEventReducer(state, {type,payload}){
  switch (type) {
    case 'push':
      return [...state,payload]
    case 'update':
      return state.map(evt => evt.id === payload.id ? payload : evt)
    case 'delete':
      return state.filter((evt) => evt.id !== payload.id)
    default:
      throw new Error();
  
  }

}

function initEvent(){
  const storageEvents = localStorage.getItem('savedEvents')
  const parsedEvent = storageEvents ? JSON.parse(storageEvents) : []
  return parsedEvent;
}

export default function ContextWrapper(props) {
    const [monthIndex,  setMonthIndex ] = useState(dayjs().month())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(dayjs().month());
    const [showEventModal , setShowEventModal] = useState(false)
    const [selectedEvent , setSelectedEvent] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [savedEvents, dispatchCalEvent] = useReducer(
      saveEventReducer,
      [],
      initEvent,
    );
  

    useEffect(() => {
      localStorage.setItem('savedEvents',JSON.stringify(savedEvents));
    },[savedEvents])

    

    useEffect(() =>{
      if(smallCalendarMonth !== null){
        setMonthIndex(smallCalendarMonth)
      }
    },[smallCalendarMonth])

    useEffect(() => {
      if (!showEventModal) {
        setSelectedEvent(null);
      }
    }, [showEventModal]);
  return (
    <GlobalContext.Provider 
    value={{
      monthIndex , 
      setMonthIndex,
      showEventModal,
      setShowEventModal,
      daySelected,
      setDaySelected,
      dispatchCalEvent,
      savedEvents,
      selectedEvent,
      setSelectedEvent,
        
      }}>
        {props.children}
    </GlobalContext.Provider>
  )
}
