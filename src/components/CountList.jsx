import React, { useContext } from 'react'
import { CountListContext } from '../contexts/CountListContext';
import styles from './count-list.module.css';

const CountList = () => {
const { countList } = useContext(CountListContext);

  return (
        <div className={styles.container}>
          <div className={styles.list_header}>
            <div>Nombre</div>
            <div>Costo</div>
          </div>
          {countList.map((element) => (
                  <div className={styles.list_content} key={element.countName}>
                      <div className={styles.name_element}>
                      {element.countName}
                      </div>
                      <div className={styles.price_element}>
                      {element.countValue}
                      </div>
                  </div>
          )
            
              )}
        </div>
  )
}

export default CountList;