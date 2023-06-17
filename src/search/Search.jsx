import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { books } from '../db/Books'


const Search = () => {
    const [data, setData] = useState('')
    function SearchData() {
        setData(e.target.value)
    }

    const filterdData = books ? books.filter((book) => book.title === data) : null
    const navigate = useNavigate();
    return (
        <div className='h-screen'>
            <button className='mr-10 border-2 p-2' onClick={() => navigate('/')}> back to home</button>
            <input placeholder='search books' type="search" onChange={SearchData} name="" id="" className='border-2 p-2 ' />
            <div className="search-items h-[100%] shadow-xl w-full ">
                {filterdData.map((item) => <div className="div">
                    <h1>{item.title}</h1>
                </div>
                )}
            </div>
        </div>
    )
}

export default Search
