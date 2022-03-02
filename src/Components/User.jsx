import React, { useState } from 'react';
import axios from 'axios';
import UserVoter from './UserVoter';

const User = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);

  const handleSubmit = async () => {
    const { data } = await axios.get('https://api.github.com/users');
    // console.log(data);
    setUserData(data);
  };

  return (
    <>
      <button onClick={() => handleSubmit()}>Find Users</button>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '2rem',
          justifyContent: 'center',
        }}
      >
        {userData && <UserVoter data={userData} />}
      </div>
    </>
  );
};

export default User;
