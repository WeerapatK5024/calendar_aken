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
    const [description, setDescription] = useState(" ") 
    const [selectedLabel , setSelectedLabel] = useState(selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label) : labelsClasses[0])
    

 
    function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
          title,
          description,
          label: selectedLabel,
          day: daySelected.valueOf(),
          id: selectedEvent ? selectedEvent.id : Date.now()
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
        <form className='bg-white rounded-lg shadow-2xl w-1/2'>
            <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
               <div></div>
                <div>
                    {selectedEvent && (
                        <span 
                        onClick={() => {
                            dispatchCalEvent({type : "delete", payload: selectedEvent})
                            setShowEventModal(false);
                            
                        } }
                        className='material-icons-outlined text-gray-400 cursor-pointer'>
                        delete
                        </span>
                    )}
                     <button onClick={() => setShowEventModal(false)}>
                <span className='material-icons-outlined text-gray-400'>
                    close
                    </span>
                </button>
                </div>
               
            </header>
            <div className='p-3'>
            <div className='grid grid-cols-1/5 items-end gap-y-7'>
                <div>
                <p className='font-bold text-2xl'>Title : </p>
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
            <span className='text-gray-400 text-md'>
                Current date :
            </span>
            <p className='text-orange-500 font-bold text-xl'>{daySelected.format("dddd, MMMM DD")}</p>
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
