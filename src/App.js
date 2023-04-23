import logo from './logo.svg';
import { BrowsweRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Advertisement from './Components/Advertisement';

import CreateBook from './Components/CreateBook';
import ShowBookList from './Components/ShowBookList';
import ShowBookDetails from './Components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

function App() {
  return (
    <Router>
      <Advertisement />
      <div>
        <Routes>
          <Route exact path='/' element={<ShowBookList />} />
          <Route path='/create-book' element={<CreateBook />} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo />} />
          <Router path='/show-book/:id' element={<ShowBookDetails />} />
        </Routes>
      </div>
      <Advertisement />
    </Router>
  );
}

export default App;
