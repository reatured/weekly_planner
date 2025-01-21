import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const start_date = new Date(selectedDate);
  
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][start_date.getMonth()];
  
  const date = `${start_date.getMonth() + 1}月${start_date.getFullYear()}`
  const week = `${Math.floor((start_date.getDate() - 1) / 7) + 1}${Math.floor((start_date.getDate() - 1) / 7) % 3 === 0 && Math.floor((start_date.getDate() - 1) / 7) % 10 !== 1 ? 'st' : Math.floor((start_date.getDate() - 1) / 7) % 3 === 1 && Math.floor((start_date.getDate() - 1) / 7) % 10 !== 1 ? 'nd' : Math.floor((start_date.getDate() - 1) / 7) % 3 === 2 && Math.floor((start_date.getDate() - 1) / 7) % 10 !== 1 ? 'rd' : 'th'} Week`
  const date_day = "Mon"
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  



  return (
    <div className="App" style={{ width: '392px', backgroundColor: '#F5F5F5' }}>
      {/* Top Block */}
      <div className="top-block" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#F5F5F5'  }}>
        <div className="Month" style={{ width: '100px'}}>
          <p>{month}</p>
        </div>

        <div className="Date" style={{ width: '172px'}}>
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ width: '100%', height: '40px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
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
             <p className="date-block-date">{index + start_date.getDate()}</p>
             <p className="date-block-day" style={{margin: 0}}>Mon</p>
              
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
