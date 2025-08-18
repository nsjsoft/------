import React, { useMemo, useRef, useState } from 'react';
import Ref from './Ref';
import Bts from './Bts';
import UseMemoTest from './UseMemoTest';
import { useThrottle } from './hooks/useThrottle';
import UserCallBack from './UserCallBack';
import BoxSize from './BoxSize';

const hardCalculate = (number) => {
  console.log('hardCalculate called');
  for (let i = 0; i < 1000000000; i++) {}
  return number + 10000;
}

function hackLottoNumbers() {
  const lottoNumbers = [];

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    lottoNumbers.push(randomNumber);
  }

  return numbers;
  
}

const App = () => {

  const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);

  const handleClick = useThrottle(() => {
    const result = hackLottoNumbers()
    setLottoNumbers(result);
  }, 1000);

  const [hardNumber, setHardNumber] = useState(1);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

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
      <BoxSize />
      <UserCallBack />
      <Ref />
      <Bts bts={bts} />
      <h3>어려운 계산기</h3>
      <input type="number"
             value={hardNumber}
             onChange={(e) => setHardNumber(parseInt(e.target.value))}
             autoComplete="off" />
      <span>계산 결과 : {hardSum}</span>
      <UseMemoTest />
    </div>
  );
};

export default App;