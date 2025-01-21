import logo from './logo.svg';
import './App.css';

function App() {
  const month = "January"
  const date = "1月2025"
  const week = "4th Week"




  return (
    <div className="App" style={{ width: '392px' }}>
      {/* Top Block */}
      <div className="top-block" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#F5F5F5'  }}>
        <div className="Month" style={{ width: '100px'}}>
          <p>{month}</p>
        </div>

        <div className="Date" style={{ width: '172px'}}>
          <p>{date}</p>
        </div>
        
        <div className="Weeks" style={{ width: '100px'}}>
          <p style={{  textAlign: 'right' }}>{week}</p>
        </div>
      </div>
      
      {/* Middle Block */}
      <div className="mid-block">
        {/* Content for the middle block */}
      </div>
      
      {/* Bottom Block */}
      <div className="bottom-block">
        {/* Content for the bottom block */}
      </div>
    </div>
  );
}

export default App;
