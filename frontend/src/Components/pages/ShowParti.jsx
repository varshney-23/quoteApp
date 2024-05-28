import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowParti = () => {
  const params = useParams();

  let [quote , setQuote] = useState({
    author : '', 
    text : ''
  })

  async function fetchQuote(){
    let res = await axios.get(`http://localhost:8080/quotes/${params.id}`)
    let {author, text} = res.data ;
    setQuote({author, text});
    // console.log(author);
  }

  useEffect(() =>{
    fetchQuote();
  }, [])

  return (
    <div>
      <h2>Author :{quote.author}</h2>
      <p>Text : {quote.text}</p>
    </div>
  )
}

export default ShowParti