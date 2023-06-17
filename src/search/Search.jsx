import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { books } from '../db/Books'


const Search = () => {
    const [data, setData] = useState('')
    function SearchData(e) {
        setData(e.target.value)
    }
    console.log(books)

    const filterdData = books.filter((book) => book.title.includes(data))
    const navigate = useNavigate();
    return (
        <div className='h-full w-full'>
            <button className='mr-10 border-2 p-2' onClick={() => navigate('/')}> back to home</button>
            <input placeholder='search books' type="search" onChange={SearchData} name="" id="" className='border-2 p-2 ' />
            <div className="search-items h-[100%] shadow-xl flex justify-center flex-wrap gap-4 p-10 w-full ">
                {filterdData?.map((item) => <div className="div">
                    {filterdData.length !== 0 ? <div className="div">
                        <img src={item.image} alt="" className='h-[400px] w-[350px]' />
                        <h1>{item.title}</h1>
                        <h1>{item.writer}</h1>
                        <h1>{item.rating}</h1>
                    </div> : ''}

                </div>
                )}
            </div>
        </div>
    )
}

export default Search
