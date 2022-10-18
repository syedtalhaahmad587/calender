import dayjs from "dayjs";
import React, { useContext , useState , useEffect } from "react";
import "./index.css";
import Month from "./Month";
import { getMonth } from "../util";
import logo from "../assets/logo.png";
import Week2 from "./Week2";
import moment from 'moment';
import Day2 from "./Day2";
import GlobalContext from "../context/GlobalContext";
import Dropdown from "./Dropdown";

export default function CalendarHeader() {
  
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [mainState, setMainState ] = useState(0);
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const [displayMode, setDisplayMode] = useState('day');
  const [today, setToday] = useState(moment())
    

useEffect(() => {
  setCurrentMonth(getMonth(monthIndex));
}, [monthIndex]);
 
 
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
    setToday(prev => prev.clone().add(1, displayMode))

  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1); 
    setToday(prev => prev.clone().subtract(1, displayMode))
  }
  function handleMonth(value) {
    // setWeekCalender()
    // setDayCalender()
    // setMonthCalender()
    setMainState(value)
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  function handleWeek(value) {
    setMainState(value)
    // setWeekCalender()
    // setDayCalender()
    // setMonthCalender()
  }

  function handleDay(value) {
    setMainState(value)
    // setWeekCalender()
    // setDayCalender()
    // setMonthCalender()
  }
  
  // const prevHandler = () => setToday(prev => prev.clone().subtract(1, displayMode));
  // const todayHandler = () => setToday(moment())
  // const nextHandler = () => setToday(prev => prev.clone().add(1, displayMode));

  return (
    <>
    <div className="MainHeader">
      <div className="secondHeader">
        <p  className="thirdHeader">Calendar</p>
        </div>
      </div>
    <div className="headerFlex" >
      <div>
    <header className="px-4 py-2 flex items-center">
      <button
           onClick={() => handleDay("2")}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      {mainState == "2"  ?
      <>
      <h2 className="  ml-4 text-xl text-gray-500 font-bold" style={{color: "rgb(254, 77, 0)"}} >
         {today.format('MMMM D, YYYY')}
      </h2>
      </> : 
      <h2 className="ml-4 text-xl text-gray-500 font-bold"style={{color: "rgb(254, 77, 0)"}}  >
      {dayjs(new Date(dayjs().year(), monthIndex)).format(
        "MMMM YYYY"
      )}
    </h2>
    }
    </header>
    </div>
    <div className="EndPoint">
      {/* <Dropdown />   */}
    <button
        onClick={() => handleMonth("0")}
        value="Month"
        className="border rounded py-2 px-4 mr-5"
      >
        Month
      </button>
      <button
        onClick={() => handleWeek("1")}
        value="Week"
        className="border rounded py-2 px-4 mr-5"
      >
        Week
      </button>
      <button
        onClick={() => handleDay("2")}
        value="Day"
        className="border rounded py-2 px-4 mr-5"> 
        Day
      </button>
    </div>
    </div>
    <div>
      {mainState == "0" && <Month month={currentMonth} />    }
      {mainState == "1" && <Week2 week={currentMonth}   />    }
      {mainState == "2" && <Day2 today={today}  />    }
    {/* <Month month={currentMonth} />   */}
    </div>
    </>
  );
}
