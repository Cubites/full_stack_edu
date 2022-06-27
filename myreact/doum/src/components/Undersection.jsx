import React from 'react';
import Ucategory from './Ucategory';
import Ufancafe from './Ufancafe';

const Undersection = ({data}) => {
  return (
    <>
      <Ufancafe data={data} />
      <Ucategory />
    </>
  )
}

export default Undersection