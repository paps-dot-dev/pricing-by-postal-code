import { Box, Paper, Button, Typography } from '@mui/material'
import { ReactComponent as Dumpster } from '../assets/dumpster.svg'
import { useNavigate, Link } from 'react-router-dom'
function ProductOption(props) {
  const navigate = useNavigate()
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          mx: 2,
          my: 5,
          p: 2,
          opacity: `${props.isDisabled}`,
        }}>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row-wrap',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            mt: 2,
          }}>
          <Typography variant='h4'>{props.name}</Typography>
          <Typography
            sx={{
              p: 3,
            }}
            variant='subtitle1'>
            {props.available ? 'Available' : 'Not Available'}
          </Typography>
        </Box>
        <Box
          sx={{
            border: '2px solid black',

            m: 'auto',
            borderRadius: '20px',

            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Dumpster height='150' width='100%' />

          <Typography variant='caption'>Dimensions</Typography>
          <Typography variant='caption'>
            {props.length}L x {props.width}W x {props.height}H
          </Typography>

          <Box>
            <Typography>Regular Rate: {props.price}</Typography>
            <Typography>Contractor's Rate: {props.discountedPrice}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            py: 2,
          }}>
          <Button
            variant='contained'
            size='medium'
            onClick={() => navigate('/quote/{props.id}')}>
            Select This Dumpster
          </Button>
        </Box>
      </Paper>
    </>
  )
}

export default ProductOption
