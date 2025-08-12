import React, {useState} from 'react';
import { useEffect } from 'react';

const UseMemoTest = () => {
  const [number, setNumber ] = React.useState(0);
  const [isKorea, setIsKorea] = React.useState(true);

  //const location = isKorea ? '한국' : '외국';
  /*
  const location = {
    country: isKorea ? '한국' : '외국'
  }
  */

  const location = React.useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국'
    }
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect 호출');
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value, 10))} />
      <hr />
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기타자</button>
    </div>
  );
  
};

export default UseMemoTest;