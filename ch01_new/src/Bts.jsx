import React from 'react';

const Bt = ({bt}) => {
  return (
    <div>
      <h4>이름: {bt.name}</h4>
      <h4>나이: {bt.age}</h4>
      <h4>이메일: {bt.email}</h4>
      <hr />
    </div>
  );
};

const Bts = ({bts}) => {
  return (
    <div>
      {
        bts.map(bt => (
          <Bt key={bt.id} bt={bt} />
        ))
      }
    </div>
  );
};

export default Bts;