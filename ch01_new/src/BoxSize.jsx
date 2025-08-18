import React, { useState } from 'react';
import Box from './Box';

const BoxSize = () => {
  const [size, setsize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = () => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    }
  };

  return (
    <div style={{ 
      backgroundColor: isDark ? 'black' : 'white'
    }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setsize(e.target.value)}
        autoComplete="off"
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};

export default BoxSize;