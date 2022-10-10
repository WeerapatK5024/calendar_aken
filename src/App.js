
import "./App.css";
import { getMonth } from "./util";
import React, {useState, useContext , useEffect} from "react";
import CalendarHeadder from "./components/CalendarHeadder";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import ContextWrapper from "./context/ContextWrapper"; 
import EventModal from "./components/EventModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndex , showEventModal} = useContext(GlobalContext)

useEffect(() => {
  setCurrentMonth(getMonth(monthIndex))
}, [monthIndex])

  return (
    <React.Fragment >
      {showEventModal && <EventModal/> }
      
      <div className="h-screen flex flex-col  " >
        <CalendarHeadder />
        <div className="flex flex-1">
          <Sidebar />
          <Month month ={currentMonth}/> 
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
