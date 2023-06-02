import { Box, Paper, Button, Typography } from '@mui/material'
import { ReactComponent as Dumpster } from '../assets/dumpster.svg'
function ProductOption() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 480,
          p: 2,
        }}>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row-wrap',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}>
          <Typography variant='h4'>10 cu yard</Typography>
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
          <Typography>10L x 8W x 3.5H</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            py: 2,
          }}>
          <Button variant='contained' size='large'>
            Select This Dumpster
          </Button>
        </Box>
      </Paper>
    </>
  )
}

export default ProductOption
