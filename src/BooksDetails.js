import './App.css';
import Header from "./Header";
import Books from "./Books";
import React, {useEffect,useState} from "react";
import { Pagination } from "react-pagination-bar"
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
//const API_KEY="AIzaSyCqIpXAlGyJOcDvCm5y-g58Q35hrA7VP1I";
import PropTypes from 'prop-types';

const BooksDetails = ({ books}) => {


    const [book, setBook] = useState([]);
    const {id}=useParams();



    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${id}&key=AIzaSyCjChLr-FuUcTDw6qfFDfwi3dXm6RInYxU`)
            .then(function(res) {
                return res.json();
            })
            .then(function(result) {
                console.log(result);
                setBook(result);
            })
            .catch((err) => console.log(err))
    },[id]);








    return (

        <div className="BooksDetails">
            <div>
                <h2>{book.title}</h2>
                <img src={book.image} alt={book.id}/>
            </div>

            <div>
                <h2>Description</h2>
                <p>{book.description}</p>
                <h2>Authors</h2>
                <p>{book.authors}</p>
                <p>{book.previewLink}</p>
                <p>{book.publisher}</p>
                <p>{book.publishedDate}</p>
                <p>{book.retailPrice?.amount}</p>
            </div>


        </div>
    )






}

export default BooksDetails;

BooksDetails.propTypes = {
    setSelectedBook: PropTypes.func,
    selectedBook: PropTypes.object
}