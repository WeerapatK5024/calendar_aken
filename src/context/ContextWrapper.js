import React , {useEffect, useState} from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

export default function ContextWrapper(props) {
    const [monthIndex,  setMonthIndex ] = useState(dayjs().month())
    const [showEventModal , setShowEventModal] = useState(false)
    const [daySelected , setdaySelected] = useState()

  return (
  
    <GlobalContext.Provider 
    value={{
      monthIndex , 
      setMonthIndex,
      showEventModal,
      setShowEventModal}}>
        {props.children}
    </GlobalContext.Provider>
  )
}
