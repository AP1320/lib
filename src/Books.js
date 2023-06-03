import './App.css';
import Header from "./Header";
//import Books from "./Books";
import React, {useEffect,useState} from "react";
import { Pagination } from "react-pagination-bar"
import {Link} from 'react-router-dom';
import BooksDetails from "./BooksDetails";
import {useNavigate} from 'react-router-dom';
//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";
import PropTypes from 'prop-types';

function Books(props) {
    const [selectedBook, setSelectedBook] = useState(null);

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);
    const navigate=useNavigate();
    const [booksStorage, setbooksStorage] = useState([]);
    const indexOfLastPost = currentPage * booksPerPage;
    const indexOfFirstPost = indexOfLastPost - booksPerPage;



    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=&maxResults=40&key=AIzaSyCjChLr-FuUcTDw6qfFDfwi3dXm6RInYxU`)
            .then(function(res) {
                return res.json();
            })
            .then(function(result) {
                console.log(result);
                setBooks(result);
            })
            .catch((err) => console.log(err))
    },[]);


    const res = props.books.items?.map(book => {
        //const currentPosts = book.slice(indexOfFirstPost, indexOfLastPost);
        return (
            <div  className="Books" key={book.id}>
                <div>
                    <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt={book.id} onClick={()=>navigate(`/lib//book/${book.id}`)}/>
                    <p>{book.volumeInfo.title}</p>



                </div>




            </div>
        )
    })



    return (
        <div className="result1">
            {res}


        </div>
    )
}
export default Books;
