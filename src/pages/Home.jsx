import React from 'react'
import CountList from '../components/CountList';
import Form from '../components/Form';
import TotalSum from '../components/TotalSum';

const Home = () => {
  return (
    <>
        <div className="list_header">
            <div>Nombre</div>
            <div>Costo</div>
        </div>
        <CountList/>
        <TotalSum/>     
        <Form/>
    </>
  )
}

export default Home;