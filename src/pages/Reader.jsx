import React from 'react';
import { useParams } from 'react-router-dom';

function Reader() {
  const { bookId } = useParams();

  return (
    <div className="reader">
      <h2>Reading Book ID: {bookId}</h2>
      <p>[Book content will be displayed here]</p>
    </div>
  );
}

export default Reader;
