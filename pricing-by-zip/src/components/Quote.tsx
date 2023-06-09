import { Typography } from '@mui/material'
import { ReactComponent as Dumpster } from '../assets/dumpster.svg'

function Quote({ data }) {
  const franchiseRate = Math.round(data.price * data.franchisePercentage)

  return (
    <>
      <Typography variant='h2'>You've Selected...</Typography>
      <Typography variant='h4'>{data.name}</Typography>
      <Dumpster height={300} />
      <Typography>${data.price}</Typography>
      <Typography>${franchiseRate}</Typography>
      <Typography>${data.permitFee}</Typography>
    </>
  )
}

export default Quote
