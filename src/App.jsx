import './App.css';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import { CountListContextProvider } from './contexts/CountListContext';

function App() {
  return (
   <CountListContextProvider>
      <div className="App">
        <Navbar/>
        <div>
          <Outlet/>
        </div>
      </div>
   </CountListContextProvider>
  );
}

export default App;
