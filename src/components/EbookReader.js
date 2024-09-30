import React, { useState } from 'react';
import './EbookReader.css';

function EbookReader() {
  const [bookmark, setBookmark] = useState(null);
  const [notes, setNotes] = useState('');

  const handleBookmark = (page) => {
    setBookmark(page);
    alert(`You have bookmarked page ${page}.`);
  };

  const handleNoteChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSaveNote = () => {
    alert(`Your note: "${notes}" has been saved.`);
    setNotes('');
  };

  return (
    <div className="ebook-reader">
      <h2>Ebook Reader</h2>
      <p>Current Book: "The Great Gatsby"</p>
      <p>Bookmark Page: {bookmark || 'None'}</p>
      <button onClick={() => handleBookmark(12)}>Bookmark Page 12</button>
      <button onClick={() => handleBookmark(45)}>Bookmark Page 45</button>

      <div className="note-taking">
        <h3>Take Notes</h3>
        <textarea value={notes} onChange={handleNoteChange} placeholder="Write your notes here..." />
        <button onClick={handleSaveNote}>Save Note</button>
      </div>
    </div>
  );
}

export default EbookReader;
