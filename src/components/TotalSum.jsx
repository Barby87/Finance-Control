import React, { useContext } from 'react'
import { CountListContext } from '../contexts/CountListContext';

const TotalSum = () => {
  const { countList } = useContext(CountListContext);

  let totalSum = countList.map(elem => elem.countNumber).reduce((prev, curr) => prev + curr, 0);
  totalSum = new Intl.NumberFormat("ES-CL", {
    style: "currency",
    currency: 'CLP'
  }).format(totalSum)
  return (
    <p>Total: {totalSum ? (<span>{totalSum}</span>) : 0}</p>
  )
}

export default TotalSum;