import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import NavLinks from './NavLinks'
import LogoWhite from '../../assets/Logos/whitelogo.png'

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000', zIndex: 1000, boxShadow: 'none', borderRadius: '40px', margin: '20px', padding: '5px', width: '98%', border: '1px solid #424242' }}>
      <Toolbar className='flex justify-between items-center'>
        {/* Logo */}
        <Box className="flex items-center space-x-2 w-5/12">
          <img src={LogoWhite} alt="logo" className="w-10 h-10" />
        </Box>

        {/* Navigation */}
        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Box sx={{ width: 250, p: 2 }}>
                <NavLinks vertical onClick={() => setDrawerOpen(false)} />
              </Box>
            </Drawer>
          </>
        ) : (
          <Box className="flex items-center space-x-8 w-7/12 justify-between">
            <NavLinks />
            <Button
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                backgroundColor: '#2FB6AC',
                color: '#fff',
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '20px',
                px: 3,
                '&:hover': {
                  backgroundColor: '#1fc3a5',
                },
              }}
            >
              Get In Touch
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
