import React, { useState } from "react";
import { books } from "../db/Books";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [allBooks, setAllBooks] = useState(books);

    const navigate = useNavigate();
    function changeCategory(e, id) {
        setAllBooks(books.map((book) =>
            book.id === id ? { ...books, category: e.target.value } : book
        ))
    }

    return (
        <div className="h-screeen w-full flex flex-col gap-2 ">
            <button className="bg-cyan-300 p-3" onClick={() => navigate("/search")}>
                search
            </button>
            <div className="currently-reading flex justify-around items-center min-h-[50%] w-full shadow-md">
                <h1>currently reading</h1>
                {allBooks
                    .filter((book) => book.category === "reading")
                    .map((book) => (
                        <div className="book shadow-md rounded p-10">
                            <img
                                src={book.image}
                                alt=""
                                className="h-[200px] w-[200px]"
                            />
                            <h1>Title: {book.title}</h1>
                            <h1>writer: {book.writer}</h1>
                            <h1>rating: {book.rating}</h1>
                            move to
                            <select
                                onChange={(e) => changeCategory(e, book.id)}
                                name=""
                                id=""
                                className="border-2"
                            >
                                <option value="reading">curently reading</option>
                                <option value="wantsToRead">want to read</option>
                                <option value="read">Read</option>
                                <option value="none">none </option>
                            </select>
                        </div>
                    ))}
            </div>
            <div className="want-to-read h-80 w-full  flex justify-around   items-center shadow-md">
                <h1>want to read</h1>
                {allBooks
                    .filter((book) => book.category === "wantsToRead")
                    .map((book) => (
                        <div className="book shadow-md p-2">
                            <img
                                src={book.image}
                                alt=""
                                style={{ height: "200px", width: "200px" }}
                            />
                            <h1>Title: {book.title}</h1>
                            <h1>writer: {book.writer}</h1>
                            <h1>rating: {book.rating}</h1>
                            move to
                            <select
                                onChange={(e) => changeCategory(e, book.id)}
                                name=""
                                id=""
                                className="border-2"
                            >
                                <option value="reading">curently reading</option>
                                <option value="wantsToRead">want to read</option>
                                <option value="read">Read</option>
                                <option value="none">none </option>
                            </select>
                        </div>
                    ))}
            </div>
            <div className="read h-80 w-full shadow-md flex justify-around   items-center">
                <h1>read</h1>
                {allBooks
                    .filter((book) => book.category === "read")
                    .map((book) => (
                        <div className="book shadow-md p-2">
                            <img
                                src={book.image}
                                alt=""
                                style={{ height: "200px", width: "200px" }}
                            />
                            <h1>Title: {book.title}</h1>
                            <h1>writer: {book.writer}</h1>
                            <h1>rating: {book.rating}</h1>
                            move to
                            <select
                                onChange={(e) => changeCategory(e, book.id)}
                                name=""
                                id=""
                                className="border-2"
                            >
                                <option value="reading">curently reading</option>
                                <option value="wantsToRead">want to read</option>
                                <option value="read">Read</option>
                                <option value="none">none </option>
                            </select>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;
