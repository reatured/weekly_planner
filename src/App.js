import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import logo from './logo.svg';
import './App.css';

function App() {
  //top block scripts
  const weekdayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const [start_date, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  // Convert start_date to a Date object for calculations
  const dateObject = new Date(start_date);
  
  const month = dateObject.getMonth() + 1;
  const topMonth = `${month}月${dateObject.getFullYear()}`
  // const week = `${Math.floor((dateObject.getDate() - 1) / 7) + 1}${['th', 'st', 'nd', 'rd'][Math.min(Math.floor((dateObject.getDate() - 1) % 10), 3)]} week`

  const firstDayOfYear = new Date(dateObject.getFullYear(), 0, 1);
  const firstSundayOfYear = new Date(firstDayOfYear.setDate(firstDayOfYear.getDate() + ((7 - firstDayOfYear.getDay()) % 7 || 0)));
  
  // Adjust week calculation to ensure the first week is counted as week 1
  const week = Math.floor(((dateObject - firstSundayOfYear) / 86400000) / 7) + 1 + (dateObject.getDay() === 0 ? 0 : 1);
  const output_Week = `Week ${week}`

  //middle block scripts
  const dateObjectArray = []
  for (let i = 0; i < 7; i++) {
    dateObjectArray.push(new Date(dateObject.setDate(dateObject.getDate() + 1)))
  }

  const dateArray = []
  for (let i = 0; i < 7; i++) {
    dateArray.push(dateObjectArray[i].getDate())
  }

  const weekdayNameArray = []
  for (let i = 0; i < 7; i++) {
    weekdayNameArray.push(weekdayArray[dateObjectArray[i].getDay()])
  }

  const getWeekday = (index) => {
    const day = weekdayArray[(dateObject.getDay() + index) % weekdayArray.length]
    return day;
  }
  
  return (
    <div className="App" style={{ width: '392px', backgroundColor: '#F6BF0BFF', minHeight: '100vh' }}>
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
          <p style={{  textAlign: 'right' }}>{output_Week}</p>
        </div>
      </div>
      
      {/* Middle Block */}
      <div className="mid-block" style={{backgroundColor: '#B38787FF'}}>
        {/* Duplicating the date-block 7 times */}
        {Array.from({ length: 7 }).map((_, index) => (
          <div className="date-block" key={index}>
            <div className="date-block-left" >
             <p className="date-block-date">{dateArray[index]}</p>
             <p className="date-block-day" style={{margin: 0}}>{weekdayNameArray[index]}</p>
              
            </div>
            <div className="date-block-right" style={{width: 'calc(100% - 106px)'}}>
            <textarea 
              placeholder="Add a note"
              style={{ width: '100%', height: 'auto', margin: '0px', padding: '0px', border: 'none', background: 'transparent', resize: 'none', fontSize: '16px' }} 
            />
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Block */}
      <div className="bottom-block" style={{backgroundColor: '#BA3535FF'}}>
        {/* Content for the bottom block */}
      </div>
    </div>
  );
}

export default App;
