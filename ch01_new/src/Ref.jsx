import React, { useRef, useState } from 'react';
import './ref.css'

const Ref = () => {

  const [inputs, setInputs] = useState({
    password: '',
    clicked: false,
    validated: false
  });

  const passwordInput = useRef();

  const { password, clicked, validated } = inputs;

  const onPassChange = (e) => {
    setInputs({
      ...inputs,
      password: e.target.value
    });
  }

  const onButtonClick = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      clicked: true,
      validated: password === '1234'
    });

    if(password !== '1234') {
      passwordInput.current.focus();
    }
  }

  return (
    <form>
      <input type="password" 
             value={password} 
             onChange={onPassChange} 
             className={clicked ? (validated ? 'success' : 'failure') : undefined} 
             ref={passwordInput}
             />
             
      <button type="submit" 
              onClick={onButtonClick}>검증하기</button>
      <hr />
      <h3>현재 입력값 : {password}</h3>
    </form>
  );
};

export default Ref;