import React from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <NavLink to="./">Inicio</NavLink>
        <NavLink to="./costs">Gastos mensuales</NavLink>
        <NavLink to="./balance">Balance</NavLink>
        <NavLink to="./blog">Blog</NavLink>
    </nav>
  )
}

export default Navbar