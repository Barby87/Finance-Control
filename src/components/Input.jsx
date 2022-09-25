import React from 'react';
import styles from './input.module.css';

const Input = ({ onChange, placeholder, id }) => {
  return (
    <input className={styles.input} placeholder={placeholder} onChange={ onChange } id={id}/>
  )
}

export default Input;