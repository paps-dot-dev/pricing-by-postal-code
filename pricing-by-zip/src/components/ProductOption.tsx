import { Box, Paper, Button, Typography } from '@mui/material'
import { ReactComponent as Dumpster } from '../assets/dumpster.svg'
function ProductOption(props) {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mx: 2,
          my: 5,
        }}>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row-wrap',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}>
          <Typography
            sx={{
              m: 2,
            }}
            variant='h4'>
            {props.name}
          </Typography>
          <Typography variant='h5'>Rolloff</Typography>
        </Box>
        <Box
          sx={{
            border: '2px solid black',
            maxWidth: '80%',
            m: 'auto',
            borderRadius: '20px',
            my: 3,
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Dumpster height='150' width='100%' />
          <Typography>
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
          <Button variant='contained' size='medium'>
            Select This Dumpster
          </Button>
        </Box>
      </Paper>
    </>
  )
}

export default ProductOption
