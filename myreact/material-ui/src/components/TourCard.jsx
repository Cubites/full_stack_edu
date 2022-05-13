import * as React from 'react';
import { Paper, Grid, Box, Typography, Rating, createTheme } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { ThemeProvider } from '@mui/private-theming';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 11,
            backgroundColor: "#efefef"
          }
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 9
          }
        }
      ]
    }
  }
})

const TourCard = ({b}) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={b.image} alt="" className="img" />
          <Box padding={2}>
            <Typography variant="subtitle1" component="h2">
              {b.name}
            </Typography>
          </Box>
          <Box paddingLeft={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{width: 12.5}} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {b.duration} hours
            </Typography>
          </Box>
          <Box paddingLeft={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating name="half-rating" defaultValue={b.rating} precision={0.5} size="small" readOnly />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              (리뷰 {b.numberOfReviews})
            </Typography>
          </Box>
          <Box paddingLeft={2}>
            <Typography variant="h6" component="h3" marginTop={0}>
              {b.rating}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard