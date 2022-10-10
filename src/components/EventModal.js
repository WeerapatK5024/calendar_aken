import React, { useContext , useState } from 'react'
import GlobalContext from '../context/GlobalContext'

const labelsClasses = ["blue"]

export default function EventModal() {
    const {setShowEventModal, 
        daySelected, 
        dispatchCalEvent, 
        selectedEvent,
    } = useContext(GlobalContext)
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title :"")
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description :"") 
    const [selectedLabel , setSelectedLabel] = useState(selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label) : labelsClasses[0])
    

 
    function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
          title,
          description,
          label: selectedLabel,
          day: daySelected.valueOf(),
          id: selectedEvent ? selectedEvent.id : Date.now(), 
        };
        if(selectedEvent){
            dispatchCalEvent({ type: 'update', payload: calendarEvent });
        }else{
          dispatchCalEvent({ type: 'push', payload: calendarEvent });
        }
        setShowEventModal(false);
    }
  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
        <form className='bg-white rounded-lg shadow-2xl w-1/1.5'>
            <header className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 flex justify-flex items-center'>
            <span className='text-white text-md pr-2'>
                Selected date :
            </span>
            <p className='text-orange-300 font-bold text-xl pr-72 '>{daySelected.format("dddd, MMMM DD")}</p>
               <div></div>
                <div>
                    {selectedEvent && (
                        <span 
                        onClick={() => {
                            dispatchCalEvent({type : "delete", payload: selectedEvent})
                            setShowEventModal(false);
                            
                        } }
                        className='border-4 border-orange-600 rounded cursor-pointer font-bold mr-2 hover:border-white'>
                         Delete
                        </span>
                    )}
                     <button onClick={() => setShowEventModal(false)}>
                <span className='border-4 border-orange-600 rounded cursor-pointer font-bold mr-2 hover:border-white '>
                    Close
                    </span>
                </button>
                </div>
               
            </header>
            <div className='p-3'>
            <div className='grid grid-cols-1/5 items-end gap-y-7'>
                <div>
                <p className='font-semibold text-md'>Title : </p>
                </div>
            <input 
                type="text" 
                name="title" 
                placeholder='Add title of event ' 
                value={title} 
                required 
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2  border-gray-200 focus:outline-none focus:ring-0 focus:border-orange-500"
                onChange={(e) => setTitle(e.target.value)}
            />
            <div>
                <p className='font-semibold text-sm'>Description : </p>
            </div>
            <input
                type="text" 
                name="description" 
                placeholder='Add description ' 
                value={description} 
                required 
                className="pt-3 border-0 text-gray-600 text-xl pb-2 w-full border-b-2  border-gray-200 focus:outline-none focus:ring-0 focus:border-orange-500"
                onChange={(e) => setDescription(e.target.value)}
            />
            <div/>
            <div className="flex gap-x-2">
                {/* {labelsClasses.map((lblClass, i) => (
                    <span key={i} 
                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                    onClick={ () => setSelectedLabel(lblClass)}
                    >
                        {selectedLabel === lblClass && <span className='material-icons-outlined text-white-400 text-sm'>
                check
            </span>}
                       
                    </span>
                ))} */}
            </div>
                </div>
            </div>
            <footer className='flex justify-end border-t p-3 mt-5'>
                <button type='submit'className=' 
                hover:border-red-500 shadow-2xl px-6 py-2 border-y-4 border-orange-500'
                onClick={handleSubmit}>
                    Submit
                </button>
            </footer>
        </form>
    </div>
  )
}
