import { useState } from 'react'

import {
  Typography,
  Container,
  Box,
  ButtonGroup,
  Button,
  Paper,
  Slider,
} from '@mui/material'
import { ReactComponent as Dumpster } from '../assets/dumpster.svg'

function Quote({ data, quoteState }) {
  const [debris, setDebris] = useState('Select A Debris Type')
  const [weight, setWeight] = useState(data.includedWeight)
  const [customRate, setCustomRate] = useState(0)
  const franchiseRate = Math.round(data.price * data.franchisePercentage)
  const grandTotal = Math.round(
    data.price + franchiseRate + data.permitFee + customRate
  )

  const handleSlider = (e) => {
    setWeight(e.target.value)

    if (weight > data.includedWeight) {
      console.log(data.includedWeight)
      const additionalRate = (weight - data.includedWeight) * (data.overage / 2)

      setCustomRate(additionalRate)
      console.log(additionalRate)
    } else {
      setCustomRate(0)
    }
  }

  return (
    <div
      style={{
        marginTop: '64px',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Typography variant='h2'>You've Selected...</Typography>
        <Typography variant='h2'>{data.name}</Typography>
      </Box>
      <Box
        sx={{
          borderBottom: '2px solid black',
          p: 1,
          mb: 4,
        }}></Box>

      <Typography
        align='right'
        sx={{
          mb: '32px',
        }}
        variant='h2'
        fontWeight={200}>
        {data.territory}
      </Typography>

      <Paper
        sx={{
          display: 'flex',
          flexFlow: 'column',
          mb: '128px',
        }}>
        {data.isFranchise ? (
          <Paper
            sx={{
              p: 3,
              textAlign: 'center',
              maxWidth: '100%',

              backgroundColor: ' #ffffe0',
              mt: '16px',
            }}>
            <Typography fontWeight={500} variant='h5'>
              Franchised
            </Typography>
          </Paper>
        ) : null}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            p: 3,
          }}>
          <ButtonGroup>
            {quoteState
              ? data.debris.map((debrisType) => {
                  return (
                    <Button
                      variant='contained'
                      sx={{
                        width: '128px',
                        py: 2,
                      }}
                      key={debrisType}
                      onClick={() => setDebris(debrisType)}>
                      {debrisType}
                    </Button>
                  )
                })
              : null}
          </ButtonGroup>
          {debris != 'Select a Debris Type' ? (
            <Paper
              sx={{
                width: 256,
              }}
              elevation={4}>
              <Typography
                align='center'
                sx={{
                  p: 2,
                }}
                variant='h4'
                fontWeight={600}>
                {debris}
              </Typography>
            </Paper>
          ) : null}
          <Typography variant='h4'>{`${data.city}, ${data.stateAbbreviation} ${data.postalCode}`}</Typography>
        </Box>

        <Dumpster
          style={{
            alignSelf: 'center',
          }}
          height={240}
        />
        <Box
          sx={{
            width: '75%',
            alignSelf: 'center',
          }}>
          {data.debris.includes('Concrete') ? (
            <Paper
              sx={{
                backgroundColor: '#ffffe0',
                p: 3,
              }}>
              <Typography fontWeight={500} align='center' variant='body1'>
                Dumpster can only be filled halfway
              </Typography>
            </Paper>
          ) : (
            <Slider
              aria-label='Always visible'
              defaultValue={data.includedWeight}
              step={100}
              min={0}
              max={16000}
              valueLabelDisplay='on'
              onChange={handleSlider}
            />
          )}
        </Box>
        {data.permitNotes != '' ? (
          <Paper
            sx={{
              p: 3,
              textAlign: 'center',
              maxWidth: '75%',
              alignSelf: 'center',
              backgroundColor: ' #feb9b9',
            }}>
            <Typography color={'red'} variant='body1'>
              {data.permitNotes}
            </Typography>
          </Paper>
        ) : null}

        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row-wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 12,
          }}>
          <Paper
            sx={{
              p: 3,
              mx: 2,
              width: '168px',
            }}>
            <Typography variant='h3'>{data.price}</Typography>
            <Typography variant='body1'>Base Rate</Typography>
          </Paper>

          <Paper
            sx={{
              p: 3,
              mx: 2,
              width: '168px',
            }}>
            <Typography variant='h3'>{weight}</Typography>
            <Typography variant='body1'>Weight Included (lbs)</Typography>
          </Paper>

          <Paper
            sx={{
              p: 3,
              mx: 2,
              width: '168px',
            }}>
            <Typography variant='h3'>{franchiseRate}</Typography>
            <Typography variant='body1'>Franchise Fee</Typography>
          </Paper>

          <Paper
            sx={{
              p: 3,
              mx: 2,
              width: '168px',
            }}>
            <Typography variant='h3'>{data.permitFee}</Typography>
            <Typography variant='body1'>Permit Fee</Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography variant='h3'>Grand Total:</Typography>

          <Paper
            elevation={5}
            sx={{
              p: 2,
              m: 2,
              backgroundColor: '#90EE90',
            }}>
            <Typography fontWeight={600} variant='h2'>
              {grandTotal}
            </Typography>
          </Paper>
        </Box>
      </Paper>
    </div>
  )
}

export default Quote
