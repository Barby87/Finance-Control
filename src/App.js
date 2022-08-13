import { useState } from 'react';
import './App.css';

function App() {
  const [countList, setCountList] = useState([])
  const [formValues, setFormValues] = useState({
    countName: null,
    countValue: null,
    countNumber: null
  })

  const handleChangeName = (e) => {
    let str = e.target.value;
    str = str.charAt(0).toUpperCase() + str.slice(1)
    setFormValues((prevState) => ({
      ...prevState,
      countName: str,
    }));

  }
  const handleChangePrice = (e) => {
    let cypher = Number(e.target.value);
    cypher = new Intl.NumberFormat("ES-CL", {
      style: "currency",
      currency: 'CLP'
    }).format(cypher)
    setFormValues((prevState) => ({
      ...prevState,
      countValue: cypher,
      countNumber: Number(e.target.value)
    }));
  }

  const handleAddElement = (e) => {
    e.preventDefault();
    setCountList((prevState) => ([...prevState, formValues]))
    document.getElementById("create-list-form").reset();
  }

  let totalSum = countList.map(elem => elem.countNumber).reduce((prev, curr) => prev + curr, 0);
  totalSum = new Intl.NumberFormat("ES-CL", {
    style: "currency",
    currency: 'CLP'
  }).format(totalSum)

  return (
    <div className="App">
      <header className="App-header">
        <div className="list_wrapper">
          <div>Nombre gasto</div>
          <div>Precio</div>
        </div>
        <ul className="list">
        {countList.map((element) => {
          return (
            <li key={element.countName} className="list_element">
              {element.countName} - {element.countValue}
            </li>
          )
        }
          )}
        </ul>

        <p>Total: {totalSum ? ( <span>{totalSum}</span>) : null}</p>
        
        <form id="create-list-form" onSubmit={(e) => handleAddElement(e)}>
          <input placeholder="Nombre" onChange={(e) => handleChangeName(e)} autoFocus/>
          <input placeholder="Precio" onChange={(e) => handleChangePrice(e)}/>
          <button type="submit">Agregar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
