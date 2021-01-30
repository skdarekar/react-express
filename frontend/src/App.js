import logo from './logo.svg';
import './App.css';
const API_ENDPOINT = "http://localhost:3001";

function App() {
  //This function opens download path 
  //in browser to trigger download
  function downloadFile() {
    window.location = `${API_ENDPOINT}/download`;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={downloadFile} >Download Logo</button>
      </header>
    </div>
  );
}

export default App;
