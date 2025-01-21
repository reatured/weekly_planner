import logo from './logo.svg';
import './App.css';

function App() {
  const month = "January"
  const date = "1月2025"
  const week = "4th Week"




  return (
    <div className="App">
      {/* Top Block */}
      <div className="top-block" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="Month">
          <p>{month}</p>
        </div>

        <div className="Date">
          <p>{date}</p>
        </div>
        <div className="Weeks">
          <p>{week}</p>
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
