import React from 'react';
import './Account.css';

function Account() {
  const ebooks = [
    { id: 1, title: 'The Great Gatsby', downloadDate: '2024-08-10' },
    { id: 2, title: '1984', downloadDate: '2024-08-15' },
    { id: 3, title: 'To Kill a Mockingbird', downloadDate: '2024-08-20' },
  ];

  const handleDownload = (title) => {
    alert(`You have downloaded ${title} again!`);
  };

  return (
    <div className="account">
      <h2>My Library</h2>
      <ul>
        {ebooks.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Downloaded on: {book.downloadDate}</p>
            <button onClick={() => handleDownload(book.title)}>Download Again</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Account;
