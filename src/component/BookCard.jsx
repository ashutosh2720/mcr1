import React from 'react'
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
    const { title, image, rating } = book;
    const navigate = useNavigate();
    function changeCategory(e, id) {
        setAllBooks(book.map((book) =>
            book.id === id ? { ...book, category: e.target.value } : book
        ))
    }

    return (
        <div className="book shadow-md rounded p-10">
            <img
                src={image}
                alt=""
                className="h-[200px] w-[200px]"
            />
            <h1>Title: {title}</h1>
            <h1>writer: {writer}</h1>
            <h1>rating: {rating}</h1>

            <select
                onChange={(e) => changeCategory(e, book.id)}
                name=""
                id=""
                className="border-2"
            >
                <option disabled='true' value=" ">Move To</option>
                <option value="reading">curently reading</option>
                <option value="wantsToRead">want to read</option>
                <option value="read">Read</option>
                <option value="none">none </option>
            </select>
        </div>
    )
}

export default BookCard
