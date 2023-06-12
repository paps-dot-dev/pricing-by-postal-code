import { Box, Paper, Button, Typography } from '@mui/material'
import { ReactComponent as Dumpster } from '../assets/dumpster.svg'

function ProductOption(props) {
  const handleClick = () => {
    const productData = {
      name: props.name,
      price: props.discountedPrice,
      includedWeight: props.includedWeight,
      maxRentalPeriod: props.maxRentalPeriod,
      debris: props.debris,
    }

    props.handleClick(productData)
  }
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          mx: 2,
          my: 5,
          p: 2,
          opacity: `${props.isDisabled}`,
          borderRadius: '20px',
          width: 450,
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

        <Paper
          elevation={4}
          sx={{
            m: 'auto',
            borderRadius: '20px',

            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Dumpster height='136' width='100%' />

          <Typography variant='body1'>Dimensions</Typography>
          <Typography variant='body2' fontWeight={500}>
            {props.length}L x {props.width}W x {props.height}H
          </Typography>

          {/* <Box
            sx={{
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'center',
            }}>
            <Typography
              sx={{
                p: 1,
              }}>
              Regular Rate: ${props.price}{' '}
            </Typography>
            <Typography
              sx={{
                border: '2px solid #FFF212',
                p: 1,
                borderRadius: '20px',
                mb: '16px',
                fontWeight: '500',
              }}>
              Contractor's Rate: ${props.discountedPrice}
            </Typography>
          </Box> */}
        </Paper>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            py: 2,
            mt: 2,
          }}>
          {props.isDisabled === '1' ? (
            <Button variant='contained' size='medium' onClick={handleClick}>
              Select This Dumpster
            </Button>
          ) : null}
        </Box>
      </Paper>
    </>
  )
}

export default ProductOption
