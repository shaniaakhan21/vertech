import React from 'react'
import { Box, Button } from '@mui/material'

interface NavLinksProps {
  vertical?: boolean
  onClick?: () => void
}

const NavLinks: React.FC<NavLinksProps> = ({ vertical = false, onClick }) => {
  const links = ['Home', 'About Us', 'Services', 'Contact']

  return (
    <Box
      className={`${
        vertical ? 'flex flex-col space-y-4 mt-4' : 'flex space-x-8'
      } text-white font-medium text-base`}
    >
      {links.map((text) => (
        <Button
          key={text}
          onClick={onClick}
          sx={{
            color: text === 'Home' ? 'white' : '#bcbcbc',
            fontWeight: text === 'Home' ? 'bold' : 'normal',
            fontSize: '20px',
            textTransform: 'uppercase',
          }}
        >
          {text}
        </Button>
      ))}
    </Box>
  )
}

export default NavLinks
