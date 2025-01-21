import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [start_date, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  // Convert start_date to a Date object for calculations
  const dateObject = new Date(start_date);
  const month = dateObject.getMonth() + 1;
  const topMonth = `${month}月${dateObject.getFullYear()}`
  const week = `${Math.floor((dateObject.getDate() - 1) / 7) + 1}${['th', 'st', 'nd', 'rd'][Math.min(Math.floor((dateObject.getDate() - 1) % 10), 3)]} + week`

  const weekdayArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const weekday = weekdayArray[dateObject.getDay()]
  console.log(weekday)
  const getWeekday = (index) => {
    const day = weekdayArray[(dateObject.getDay() + index) % weekdayArray.length]
    return day;
  }
  
  return (
    <div className="App" style={{ width: '392px', backgroundColor: '#F5F5F5' }}>
      {/* Top Block */}
      <div className="top-block" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#F5F5F5'  }}>
        <div className="Month" style={{ width: '100px'}}>
          <p>{topMonth}</p>
        </div>

        <div className="Date" style={{ width: '172px'}}>
          <input 
            type="date" 
            value={start_date}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ width: '100%', height: '40px', margin: '0px', padding: '0px', borderRadius: '5px', border: '1px solid #ccc' }} 
          />
        </div>
        
        <div className="Weeks" style={{ width: '100px' }}>
          <p style={{  textAlign: 'right' }}>{week}</p>
        </div>
      </div>
      
      {/* Middle Block */}
      <div className="mid-block" style={{backgroundColor: '#B38787FF'}}>
        {/* Duplicating the date-block 7 times */}
        {Array.from({ length: 7 }).map((_, index) => (
          <div className="date-block" key={index}>
            <div className="date-block-left" >
             <p className="date-block-date">{index +1 + dateObject.getDate()}</p>
             <p className="date-block-day" style={{margin: 0}}>{getWeekday(index)}</p>
              
            </div>
            <div className="date-block-right" style={{width: 'calc(100% - 106px)'}}>
              
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Block */}
      <div className="bottom-block" style={{backgroundColor: '#000000FF'}}>
        {/* Content for the bottom block */}
      </div>
    </div>
  );
}

export default App;
