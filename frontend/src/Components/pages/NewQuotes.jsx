import React, { useRef } from 'react'
import styles from './NewQuote.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const NewQuotes = () => {

  let navigate = useNavigate();

  let userRef = useRef();
  let quoteRef = useRef();
  
  const addQuoteHandler = async (e)=>{
    e.preventDefault();
    // console.log(userRef.current.value);
    // console.log(quoteRef.current.value);
    const author = userRef.current.value;
    const text = quoteRef.current.value;
    try{
      let res = await axios.post('http://localhost:8080/addquotes', {author, text});
      // console.log(res);
      navigate('/allQuotes');
    }
    catch(e){
      console.log("Cannot create new at the moment");
    }
  }

  return (
    <form onSubmit={addQuoteHandler} className={styles['new-quote-form']}>
      <div>
        <label htmlFor="author">Author: </label>
        <input type="text" id  = "author" ref = {userRef} placeholder="Author's Name"/>
      </div>
      <div>
        <label htmlFor="text">Quote: </label>
        <textarea name ="" id  = "text" cols = {20} rows = {10} ref = {quoteRef} placeholder="Write Quote here.."/>
      </div>
      <button >Add Your Quote</button>
    </form>
  )
}

export default NewQuotes