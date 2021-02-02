import React, { useState, useEffect } from 'react';
import booksFromAssets from '../assets/childrensbooks.json';
import '../App.css';

import Book from './Book';
import BookInfo from './BookInfo';

function Books() {
    const [currentBook, setCurrentBook] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(booksFromAssets);
    }, [])

    return (
        <section class="library">
            <div class="wrapper">
                { currentBook ? <BookInfo book={ currentBook } close={ setCurrentBook } /> :  
                    <main class="books">
                        { books.map((book, index) => {
                            return <Book book={ book } moreInfo={ setCurrentBook } key={ index } />
                        })}
                    </main>
                }
            </div>
        </section>
    )
}

export default Books;