import React, { useState } from 'react';

import Upvotes from './Upvotes';
import Downvotes from './Downvotes';

const UserVoter = ({ data }) => {
  return (
    <>
      {data.map((u) => (
        <div
          key={u.id}
          style={{
            width: 'calc(90%/3)',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            border: '1px dotted grey',
            margin: '0.5rem',
          }}
        >
          <div>
            <img
              src={u.avatar_url}
              alt={u.login}
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                border: '2px solid gray',
                marginTop: '1rem',
              }}
            />
          </div>
          <div>
            <p style={{ textTransform: 'uppercase', fontWeight: '600' }}>
              {u.login}
            </p>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-evenly' }}
          ></div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Upvotes />
            <Downvotes />
          </div>
        </div>
      ))}
    </>
  );
};

export default UserVoter;
