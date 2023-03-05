import React from 'react';
const Profile = ({ data, handleName }) => {
  return (
    <div>
      <button onClick={() => handleName(data.fullName)}>Click me!</button>
    </div>
  );
};

export default Profile;
