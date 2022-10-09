import React, { useContext , useState } from 'react'
import GlobalContext from '../context/GlobalContext'

const labelsClasses= [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
]

export default function EventModal() {
    const [title, setTitle] = useState('')
    const {setShowEventModal, daySelected, dispatchCalEvent , selectedEvent} = useContext(GlobalContext)
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );

    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
          ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
          : labelsClasses[0]
      );
      
    function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
          title,
          description,
          label: selectedLabel,
          day: daySelected.valueOf(),
          id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
          dispatchCalEvent({ type: "update", payload: calendarEvent });
        } else {
          dispatchCalEvent({ type: "push", payload: calendarEvent });
        }
    }
  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
        <form className='bg-white rounded-lg shadow-2xl w-1/4'>
            <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                <span className='material-icons-outlined text-gray-400'>
                    drag_handle
                </span>
                <button onClick={() => setShowEventModal(false)}>
                <span className='material-icons-outlined text-gray-400'>
                    close
                    </span>
                </button>
            </header>
            <div className='grid grid-cols-1/5 items-end gap-y-7'>
                <div></div>
            <input 
                type="text" 
                name="title" 
                placeholder='Add title of the event ' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2  border-gray-200 focus:outline-none focus:ring-0 focus:border-orange-500"
            />
            <span className='material-icons-outlined text-gray-400'>
                schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            </div>
        </form>
    </div>
  )
}
