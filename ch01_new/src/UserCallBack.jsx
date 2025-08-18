import React, { useState, useEffect, useCallback } from 'react';

const UserCallBack = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunc = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log('someFunc has changed');
  }, [someFunc]);

return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunc}>Call someFunc</button>    
      <br/>
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
    </div>
  );
};

export default UserCallBack