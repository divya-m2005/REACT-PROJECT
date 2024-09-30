import React from 'react';
import './Catalog.css';

function Catalog() {
  const ebooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$10.99' },
    { id: 2, title: '1984', author: 'George Orwell', price: '$8.99' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$9.99' },
  ];

  const handlePurchase = (title) => {
    alert(`You have purchased ${title}!`);
  };

  return (
    <div className="catalog">
      <h2>Catalog</h2>
      <ul>
        {ebooks.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <button onClick={() => handlePurchase(book.title)}>Purchase</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
