import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

export default function CreateEventButton() {
  const {setShowEventModal} = useContext(GlobalContext)
 
  return (
  <button onClick={() => setShowEventModal(true)} className="border-y-4 p-2 flex items-center shadow-md hover:border-2">
        <span className="pl-3 pr-7">Add Events</span>
    </button>
  )
}