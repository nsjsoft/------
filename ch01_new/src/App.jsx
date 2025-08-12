import React, { useRef } from 'react';
import Ref from './Ref';
import Bts from './Bts';

const App = () => {
  const bts = [
    {
      id: 'st001',
      name: '김남준',
      age: 28,
      email: 'rm@gmail.com'
    },
    {
      id: 'st002',
      name: '김석진',
      age: 30,
      email: 'jin@gmail.com'
    }
  ];

  const nextId = useRef(3);

  console.log(nextId);
  const onCreate = () => {
    nextId.current += 1;
  }
  return (
    <div>
      <Ref />
      <Bts bts={bts} />
    </div>
  );
};

export default App;