import React, { useContext } from 'react'
import { CountListContext } from '../contexts/CountListContext';
import styles from './total-sum.module.css';

const TotalSum = () => {
  const { countList } = useContext(CountListContext);

  let totalSum = countList.map(elem => elem.countNumber).reduce((prev, curr) => prev + curr, 0);
  totalSum = new Intl.NumberFormat("ES-CL", {
    style: "currency",
    currency: 'CLP'
  }).format(totalSum)
  return (
    <p className={styles.text}>Total: {totalSum ? (<span>{totalSum}</span>) : <span>0</span>}</p>
  )
}

export default TotalSum;