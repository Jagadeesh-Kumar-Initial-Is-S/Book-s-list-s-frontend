import React, { useState } from 'react';
import { Link } from 'reacct-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function CreateBook(props) {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [book, setBook] = userState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  });

  const on Change = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/books', book)
      .then((res) => {
        setBook({
          title: '',
          isn: '',
          author: '',
          description: '',
          published_date: '',
          publisher: '',
        });

        // Push to
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
      });
  };


  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Book List
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBook