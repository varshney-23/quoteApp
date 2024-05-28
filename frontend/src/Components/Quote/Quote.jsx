import React from 'react'
import styles from './Quote.module.css'
import { useNavigate } from 'react-router-dom'

const Quote = (props) => {
  let navi = useNavigate();
  const showQuoteHandler = async (id) =>{
    navi(`/quotes/${id}`);
    //console.log(res);
  }
  const deleteQuoteHandler = async (id) =>{
    navi(`/delete/${id}`);
    //navi(`/allQuotes`);
  }
  return (
    <div className={styles.quote}>
      <li>
        <span>
          <p> {props.text}  </p>
          <h3>{props.author}</h3>
        </span>      
      </li>
      <button onClick={()=>{showQuoteHandler(props.id)}}>View Full Quote</button>
      <button onClick={()=>{deleteQuoteHandler(props.id)}}>Delete Quote</button>
    </div>
  )
}

export default Quote