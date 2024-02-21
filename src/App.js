import React from 'react';
import Button from './Button'; // assuming Button.js is in the same directory

function App() {
  const handleClick = (message) => {
    console.log('Button clicked:', message);
  };

  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
