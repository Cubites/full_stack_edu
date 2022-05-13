import React from 'react';
import TourCard from './components/TourCard';
import { Container, Grid, Typography } from '@mui/material';
import SearchAppbar from './components/SearchAppbar';
import theBest from './data.json';

const App = () => {
  return (
    <>
      <SearchAppbar />
      <Container sx={{marginY: 5}}>
        {
          theBest.map((bt) => (
            <div key={bt.id}>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                {bt.name}
              </Typography>
              <Grid container spacing={5}>
                { bt.tours.map((b, index) => <TourCard b={b} key={index} />)}
              </Grid>
            </div>
          ))
        }
        {/* <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid> */}
      </Container>
    </>
  )
}

export default App