import adrLogo from '../assets/ADR B.png'
import { Typography, Box } from '@mui/material'

function Header() {
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginY: '32px',
        }}>
        <img src={adrLogo} alt='ADR Logo' height={120} />
        <Typography
          variant='h4'
          sx={{
            opacity: 0.2,
          }}>
          Pricing by Zip Code
        </Typography>
      </Box>
    </header>
  )
}

export default Header
