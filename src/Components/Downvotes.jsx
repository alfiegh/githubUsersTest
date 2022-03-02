import React, { useState } from 'react';
import { BiDownvote } from 'react-icons/bi';

const Downvotes = () => {
  const [downvotes, setDownvotes] = useState(0);

  const handleUpvote = () => {
    setDownvotes(downvotes - 1);
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
        <BiDownvote />
      </button>
      <p>{downvotes}</p>
    </div>
  );
};

export default Downvotes;
