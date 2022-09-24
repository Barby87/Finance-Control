import './App.css';
import CountList from './components/CountList';
import Form from './components/Form'
import TotalSum from './components/TotalSum';
import { CountListContextProvider } from './contexts/CountListContext';

function App() {
  

  return (
   <CountListContextProvider>
      <div className="App">
        <div className="list_header">
            <div>Nombre</div>
            <div>Costo</div>
        </div>
        <CountList/>
        <TotalSum/>     
        <Form/>
      </div>
   </CountListContextProvider>
  );
}

export default App;
