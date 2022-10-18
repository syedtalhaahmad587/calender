import React , { useState } from 'react';
import moment from 'moment';
import "./index.css"

const Day2 = (props) => {

    // const [today, setToday] = useState(moment())
    // const [displayMode, setDisplayMode] = useState('day');
// function ClickNext() {
//     setToday(prev => prev.clone().add(1, displayMode))
// }
// const prevHandler = () => setToday(prev => prev.clone().subtract(1, displayMode));

  return (  
    <>
    <div className='DayTable'>
     <table className='tableDay'>
        <tr className='t-row' >
            <th style={{width:"5%"}}></th>
            <th style={{width:"100%"}}><p className='sizeState' >{props.today.format('dddd')}</p><h1>{props.today.format('DD')}</h1></th>
        </tr>
        <tr className='tablePadding'>
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
    </div>
    </>
  )
}

export default Day2