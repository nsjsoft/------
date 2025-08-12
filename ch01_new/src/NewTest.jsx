import React, {useState} from 'react';

function NewTest() {
  const [inputValue, setInputValue] = useState('');
  //const [list, setList] = useState(['밥먹기', '코딩하기']);
  const [list, setList] = useState([
    {
      id: 1,
      value: '밥먹기'
    },
    {
      id: 2,
      value: '코딩하기'
    }
  ]);
  const addToList = () => {
    setList((prevList) => {
      return [{
        id: list.length + 1 + '', // Simple ID generation
        value: inputValue
      }, ...prevList];
    });
    setInputValue('');
  };

  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addToList}>추가</button>
      <ul>
        {/* Displaying the list items with an input field for each item 
        {list.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <input />
            </div>
          );
        })}
          */}
          {list.map((item) => {
            return <li key={item.id}>{item.value}</li>
          })}
      </ul>
    </>
  );
}

export default NewTest;
