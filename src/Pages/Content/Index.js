import React, { useState } from 'react'
import styles from "./styles.module.css";

const Index = () => {
  const [item,setItem]= useState([])
  console.log(item)
  function addItem(){
    setItem([...item,{
      id: item.length,
      value: Math.random()
    }

    ]

    )
  }
   

  return (
    <div className={styles.app}>  
    <ol>
    {item.map(item=>(
      <li key={item.id}>{item.value}</li>
    ))}
    </ol>
    <button className={styles.btn} onClick={addItem}>Add clickme</button>
    
    </div>
  )
}

export default Index