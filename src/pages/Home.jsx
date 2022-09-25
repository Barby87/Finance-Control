import React from 'react'
import CountList from '../components/CountList';
import Form from '../components/Form';
import TotalSum from '../components/TotalSum';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
        <CountList/>
        <TotalSum/>     
        <div className={styles.form_wrapper}>
          <Form/>
        </div>
    </div>
  )
}

export default Home;