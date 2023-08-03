import React from 'react'
import "./BooksCarousel.css"
import {useSnapCarousel} from 'react-snap-carousel'


export default function BooksCarousel(books) {
    
        const { scrollRef, pages, activePageIndex, next, prev, goTo} =
          useSnapCarousel();
          const booksArr = Object.values(books)

          function deleteBook(){
            console.log("Deleting Book placeholder")
          }

          function updateBook(){
            console.log("Updating Book placeholder")
          }
          

        return (
          <>
            <ul
              ref={scrollRef}
              className='scrool'
            >
                
              { booksArr[0].map((book, _id) => (
                <li key={_id} className='bookLi'
                >
                <h3 className="bookTitle">{book.title}</h3>
                <p className="bookDescription">{book.description}</p>
                <p className="bookStatus">{book.status}</p>
                <div className='bookOptions'>
                    <button className='updateButton' onClick={updateBook}>Update</button>
                    <button className='deleteButton' onClick={deleteBook}>Delete</button>
                </div>
                </li>
              ))}
            </ul>
            <button className='prevButton' onClick={() => prev()}>Prev</button>
            <button className='nextButton' onClick={() => next()}>Next</button>
            <ol style={{ display: 'flex' }}>
              {pages.map((_, i) => (
                <li key={i}>
                  <button className='pageNum'
                    style={i === activePageIndex ? { opacity: 0.5 } : {}}
                    onClick={() => goTo(i)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ol>
          </>
        );
      };