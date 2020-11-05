import './App.css';
import './Sidebar'
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <div className="App__body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
