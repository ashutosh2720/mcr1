import React from "react";
import { books } from "../db/Books";

const Home = () => {


    return (
        <div className="h-screeen w-full flex flex-col gap-2 ">
            <div className="currently-reading flex justify-around   items-center h-80 w-full shadow-md">
                <h1>currently reading</h1>
                {books.map((book) =>
                    book.isReading ? (<div className="book shadow-md rounded p-2">
                        <img src={book.image} alt="" style={{ height: '200px', width: '200px' }} />
                        <h1>Title: {book.title}</h1>
                        <h1>writer: {book.writer}</h1>
                        <h1>rating: {book.rating}</h1>
                        move to
                        <select name="" id="" className="border-2">
                            <option value="">curently reading</option>
                            <option value="">want to read</option>
                            <option value="">Read</option>
                            <option value="">none   </option>
                        </select>

                    </div>) : '')}
            </div>
            <div className="want-to-read h-80 w-full  flex justify-around   items-center shadow-md">
                <h1>want to read</h1>
                {books.map((book) =>
                    book.wantToRead ? (<div className="book shadow-md p-2">
                        <img src={book.image} alt="" style={{ height: '200px', width: '200px' }} />
                        <h1>Title: {book.title}</h1>
                        <h1>writer: {book.writer}</h1>
                        <h1>rating: {book.rating}</h1>
                        move to
                        <select name="" id="" className="border-2">
                            <option value="">curently reading</option>
                            <option value="">want to read</option>
                            <option value="">Read</option>
                            <option value="">none   </option>
                        </select>
                    </div>) : '')}
            </div>
            <div className="read h-80 w-full shadow-md flex justify-around   items-center">
                <h1>read</h1>
                {books.map((book) =>
                    book.read ? (<div className="book shadow-md p-2">
                        <img src={book.image} alt="" style={{ height: '200px', width: '200px' }} />
                        <h1>Title: {book.title}</h1>
                        <h1>writer: {book.writer}</h1>
                        <h1>rating: {book.rating}</h1>
                        move to
                        <select name="" id="" className="border-2">
                            <option value="">curently reading</option>
                            <option value="">want to read</option>
                            <option value="">Read</option>
                            <option value="">none   </option>
                        </select>
                    </div>) : '')}
            </div>


        </div>
    );
};

export default Home;
