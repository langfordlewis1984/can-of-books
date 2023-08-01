import React, { useEffect, useState } from 'react'
import "./BestBooks.css"
import axios from "axios"


export default function BestBooks() {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        getBooks()
    }, [])

    async function getBooks(){
        try{
            let API = `http://localhost:8888/books`
            const result = await axios.get(API)
            console.log(result.data)
            // setBooks([])
            setBooks(result.data)
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='books'>
        <h2>Books</h2>
        {books.length === 0 ? (<p>There are no books</p>):(books.map(book => {
            return(
            <div key={book._id}>
                <div>
                    <h3 className='bookTitle'>{book.title}</h3>
                    <p className='bookDescription'>{book.description}</p>
                    <p className='bookStatus'>{book.status}</p>
                </div>
            </div>
            )
        }))
        }
    </div>
  )
}
