import React, {useContext, useState} from 'react'
import { CountListContext } from '../contexts/CountListContext'

const Form = () => {
    const { setCountList } = useContext(CountListContext);
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
    document.getElementById("inputName").focus();
}
  return (
    <form id="create-list-form" onSubmit={(e) => handleAddElement(e)}>
        <input placeholder="Nombre" onChange={(e) => handleChangeName(e)} id="inputName"/>
            <input placeholder="Precio" onChange={(e) => handleChangePrice(e)}/>
            <button type="submit">Agregar</button>
    </form>
  )
}

export default Form;