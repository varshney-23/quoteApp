import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteQuote = () => {
  const params = useParams();
  const navi = useNavigate();
  const deleteQ = async (id) =>{

    let res = await axios.post(`http://localhost:8080/delete/${params.id}`);

  }

  useEffect(()=>{
    deleteQ();
    navi('/allQuotes');
  }, []);


  return (
    <div>
      deleteQ();
    </div>
  )
}




export default DeleteQuote