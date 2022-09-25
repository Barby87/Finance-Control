import React from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
       <div className={styles.links_wrapper}>
          <NavLink 
            to="./" 
            className={styles.link} 
            style={({ isActive }) => 
              isActive ? {
                color: '#fff',
                // background: '#fff',
                border: '1.5px solid green',
                borderRadius: '15px',
                padding: '0.5rem 1rem'
              } : {
                color: '#fff',
                background: 'none',
                borderRadius: '15px',
                padding: '0.5rem 1rem'
            }}
          >Inicio</NavLink>
          <NavLink 
            to="./costs" 
            className={styles.link}
            style={({ isActive }) => 
            isActive ? {
                color: '#000000',
                background: '#fff',
                borderRadius: '15px',
                padding: '0.5rem'
            } 
            : {
                color: '#fff',
                background: 'none',
                borderRadius: '15px',
                padding: '0.5rem'
          }}  
          >Gastos mensuales</NavLink>
          <NavLink 
            to="./balance" 
            className={styles.link}
            style={({ isActive }) => 
              isActive ? {
                color: '#000000',
                background: '#fff',
                borderRadius: '15px',
                padding: '0.5rem'
              } : {
                color: '#fff',
                background: 'none',
                borderRadius: '15px',
                padding: '0.5rem'
            }}
          >Balance</NavLink>
          <NavLink 
           to="./blog" 
           className={styles.link}
           style={({ isActive }) => 
              isActive ? {
                color: '#000000',
                background: '#fff',
                borderRadius: '15px',
                padding: '0.5rem'
              } : {
                color: '#fff',
                background: 'none',
                borderRadius: '15px',
                padding: '0.5rem'
            }}
          >Blog</NavLink>
       </div>
    </nav>
  )
}

export default Navbar