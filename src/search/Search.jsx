import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { books } from '../db/Books'


const Search = () => {
    const [data, setData] = useState('')
    const [allBooks, setAllBooks] = useState(books);


    function SearchData(e) {
        setData(e.target.value)
    }
    function changeCategory(e, id) {
        setAllBooks(books.map((book) =>
            book.id === id ? { ...books, category: e.target.value } : book
        ))
    }
    console.log(books)

    const filterdData = books.filter((book) => book.title.includes(data))
    const navigate = useNavigate();
    return (
        <div className='h-full w-full'>
            <button className='mr-10 border-2 p-2' onClick={() => navigate('/')}> back to home</button>
            <input placeholder='search books' type="search" onChange={SearchData} name="" id="" className='border-2 p-2 ' />
            {data && <div className="search-items h-[100%] shadow-xl flex justify-center flex-wrap gap-4 p-10 w-full ">
                {filterdData?.map((item) => <div className="div">
                    <div className="div">
                        <img src={item.image} alt="" className='h-[400px] w-[350px]' />
                        <h1>{item.title}</h1>
                        <h1>{item.writer}</h1>
                        <h1>{item.rating}</h1>

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

                </div>
                )}
            </div>}
        </div>
    )
}

export default Search
