import React from 'react';
import { Container, Typography } from '@mui/material';
import RestList from './components/RestList';

const App = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px", 
            fontWeight: 'bold'}}>레스토랑 리스트</Typography>
        <RestList />
      </Container>
    </div>
  )
}

export default App