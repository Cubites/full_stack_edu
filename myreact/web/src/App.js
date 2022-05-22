import React from 'react';
import styled from 'styled-components';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

const Appbox = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const App = () => {
  return (
    <Appbox>
      <Header />
      <Main />
      <Footer />
    </Appbox>
  )
}

export default App