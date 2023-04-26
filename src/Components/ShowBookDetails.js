import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowBookDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParms();
  const navigate = useNavigate();
  cons
  return (
    <div>ShowBookDetails</div>
  )
}

export default ShowBookDetails