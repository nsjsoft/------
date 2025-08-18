import React, { useEffect, useState } from 'react';

const Box = ({ createBoxStyle }) => {

  const [style, setStyle] = useState({
    
  });

  useEffect(() => {
    console.log('Box 키우기 ');
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return (
    <div style={style}></div>
  );
};

export default Box;