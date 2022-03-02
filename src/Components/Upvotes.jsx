import React, { useState } from 'react';
import { BiUpvote } from 'react-icons/bi';

const Upvotes = () => {
  const [upvotes, setUpvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  return (
    <div>
      <button
        onClick={() => handleUpvote()}
        style={{
          border: 'none',
          borderRadius: '10px',
          marginBottom: '1rem',

          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <BiUpvote />
      </button>
      <p>{upvotes}</p>
    </div>
  );
};

export default Upvotes;
