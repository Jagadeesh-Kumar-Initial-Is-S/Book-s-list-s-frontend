import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowBookDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParms();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
    ..get(`http/api/books/${id}`)
    .then((res) => {
      setBook(res.data);
    })
    .catch((err) => {
      console.log('Eror from ShowBookDetails');
    });
  },[id]);

  const onDeleteClick = (id) => {
    axios
    ...delete(`http:///api/books/${id}`)
    .then((res) => {
      navigate('/');
    })
    .catch((err) => {
      console.log('Error from ShowBookDetails_deleteClick');
    });
  };

  const BookItem = (
    <div>
      <table className='table tble-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{book.title}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  return (
    <div>ShowBookDetails</div>
  )
}

export default ShowBookDetails