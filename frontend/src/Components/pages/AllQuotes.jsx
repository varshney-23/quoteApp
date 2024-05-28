import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Quote from '../Quote/Quote';

const AllQuotes = () => {
  // let dummy = [] ;
  let [quotes, setQuotes] = useState([]);

  async function getQuotes(){
    let res = await axios.get('http://localhost:8080/allQuotes');
    // // console.log(res);
    setQuotes(res.data);
  }
  useEffect(() =>{
    // console.log("khikhi");
    getQuotes();
  }, []);

  return (
    <div>
      <h3>
        Saare Quotes hu m.
      </h3>
      <ul>
        {
          quotes.map((quote, index) =>{
            return <Quote 
              key = {quote._id}
              author = {quote.author}
              text = {quote.text}
              id = {quote._id}
            />
          })
        }
      </ul>
    </div>
  )
}

export default AllQuotes