import './App.css';
import Header from "./Header";
import Books from "./Books";
//import Books from "./Books";
import React, {useEffect,useState} from "react";
import Pagination from "./Pagination";
import Items from "./Pagination";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import BooksDetails from "./BooksDetails";
import About from "./About";
import {books} from "./Books";

import {useNavigate} from 'react-router-dom';
import Boooks from "./Boooks";
import ReactPaginate from "react-paginate";
import NoPageFound from "./NoPageFound";

//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";
import PropTypes from 'prop-types';


function App() {

    const [books, setBooks] = useState({});
    const [booksStorage, setbooksStorage] = useState([]);
    const [book, setBook] = useState([]);
    const [bok, setBoks] = useState([]);
    const [booksList, setBooksList] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);

    const navigate=useNavigate();



    async function Library(e) {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}&maxResults=40&key=AIzaSyCjChLr-FuUcTDw6qfFDfwi3dXm6RInYxU`)
            .then(function(res) {
                return res.json();
            })
            .then(function(result) {
                console.log(result);
                setBooks(result);
            })
            .catch((err) => console.log(err))
    }


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);








    return (

        <div className = "App" >



            <Header books={books} Library={Library}/>

            <BrowserRouter basename="/lib/">



            <Routes>
                <Route path="//lib/" element={<Books books={books} /> }/>
                <Route path="//lib/book/:id" element={<BooksDetails book={book}/>}/>



            </Routes>
            </BrowserRouter>





        </div>



    );
}

export default App;