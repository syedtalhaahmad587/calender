import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import Day from "./components/Day";
import Week from "./components/Week";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import SmallCalendar from "./components/SmallCalendar";
import Day2 from "./components/Day2";
import Week2 from "./components/Week2";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex, showEventModal } = useContext(GlobalContext);
  console.log(monthIndex);
  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div style={{height: "auto" , margin: "60px auto" , width : "80%" ,  boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px"}} className="h-screen flex flex-col">
        <CalendarHeader />  
        {/* <SmallCalendar /> */}
        {/* <Day2 /> */}
        <div className="flex flex-1">
          
          {/* <Sidebar /> */}
          {/* <Month month={currentMonth} />   */}
          {/* <CalendarHeader /> */}
           {/* <Week2 /> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
