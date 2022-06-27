import React from 'react';
import Mleft from './Mleft';
import Mright from './Mright';

const Middle = ({data}) => {
  return (
    <div className="container pt pb">
      <div className="row">
        <Mleft data={data} />
        <Mright />
      </div>
    </div>
  )
}

export default Middle