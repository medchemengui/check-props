import React from 'react';
import data from './Data';
import Profile from './Profile/Profile';

const App = () => {
  const handleName = (name) => {
    alert(`Hello, my name is ${name}`);
  };

  return (
    <div>
      <Profile data={data} handleName={handleName} />
      
    </div>
  );
};

export default App;