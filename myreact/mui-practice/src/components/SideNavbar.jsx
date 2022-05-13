import React, { useState } from 'react'
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import { Home as HomeIcon, Search as SearchIcon, Flight as FlightIcon, 
         Icecream } from '@mui/icons-material';
import { styled } from '@mui/styles';

const FixedToolbar = styled(Toolbar)({
  width: '220px',
  paddingRight: 0,
  justifyContent: 'space-between'
})
const FixedIconButton = styled(IconButton)({
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, .3)'
  }
})
const IconText = styled('p')({
  width: '150px',
  color: '#333',
  fontSize: '13px'
})

const SideNavbar = () => {
  const [navWidth, setNavWidth] = useState(90);
  return (
    <Box position="fixed">
      <AppBar sx={{
        backgroundColor: '#ededed',
        transition: 'width .5s',
        width: `${navWidth}px`,
        height: "100%",
        left: 0,
        flexDirection: "column",
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <FixedToolbar 
          sx={[
            {
              marginBottom: '20px',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '15px',
                transition: 'width .5s',
                width: `${navWidth - 30}px`,
                height: '1px',
                backgroundColor: '#666'
              }
            }
          ]}
          onClick={() => setNavWidth(90)}
        >
          <FixedIconButton>
            <HomeIcon />
          </FixedIconButton>
          <IconText>이모저모 랭킹</IconText>
        </FixedToolbar>
        <FixedToolbar>
          <FixedIconButton onClick={() => setNavWidth(300)}>
            <SearchIcon />
          </FixedIconButton>
        </FixedToolbar>
        <FixedToolbar>
          <FixedIconButton onClick={() => setNavWidth(90)}>
            <Icecream />
          </FixedIconButton>
          <IconText>맛있는 디저트 순위</IconText>
        </FixedToolbar>
        <FixedToolbar>
          <FixedIconButton onClick={() => setNavWidth(90)}>
            <FlightIcon />
          </FixedIconButton>
          <IconText>경치 좋은 여행지 순위</IconText>
        </FixedToolbar>
      </AppBar>
    </Box>
  )
}

export default SideNavbar