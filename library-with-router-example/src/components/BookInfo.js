import React from 'react';

function BookInfo({ book, close }) {
    return (
        <main class="background-dark">
            <div class="book-info">
                <header>
                    <a href="#" class="back" onClick={ () => close('') }>&#8592;</a>
                </header>
                <section class="display">
                    <article class="book" style={{ backgroundColor: book.color }}>
                        <section class="bg"></section>
                        <section class="content">
                            <aside></aside>
                            <section class="about">
                                <h2>{ book.title }</h2>
                                <h3>{ book.author }</h3>
                            </section>
                        </section>
                    </article>
                </section>
                <section class="info">
                    <h1>{ book.title }</h1>
                    <h3>{ book.author }</h3>
                    <p>{ book.plot }</p>
                    <footer>
                        <p><b>Audience:</b> { book.audience }</p>
                        <p><b>First Published:</b> { book.year }</p>
                        <p><b>Pages:</b> { book.pages || '-' }</p>
                        <p><b>Publisher:</b> { book.publisher }</p>
                    </footer>
                </section>
            </div>
        </main>
    )
}

export default BookInfo;