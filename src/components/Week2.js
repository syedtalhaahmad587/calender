import React, { useContext , useState , useEffect } from "react";
import "./index.css";
import { getMonth } from '../util';
import GlobalContext from '../context/GlobalContext';
import Day from "./Day";

const Week2 = ({week}) => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
//   console.log(currentMonth[0].idx);
console.log(week.slice(0,1));
let a = week.slice(0,1);
// let new = a.splice(2,1)


    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
      }, [monthIndex]);
      var size = 1
  return (
    <>
             <div className="MonthDefault">
             <div className="flex-1 grid grid-cols-7 grid-rows-5">
             {week.slice(0,1).map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}  
           </React.Fragment>
      ))}   
      </div>
      </div>
        {/* <div className='DayTable'>
    <table className='tableHead'>
           
        
        <tr className='tablePadding' >
            <td>9:30</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>10:00</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>10:30</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>11:00</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>11:30</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>12:00</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>12:30</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>1:00</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>1:30</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>2:00</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>2:30</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>3:00</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>3:30</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>4:00</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>4:30</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        <tr className='tablePadding' >
            <td>5:00</td>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>

    </table>
    </div> */}
    </>
  )
}

export default Week2