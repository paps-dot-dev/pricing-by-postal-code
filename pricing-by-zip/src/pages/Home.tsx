import { useState } from 'react'

import {
  Autocomplete,
  Box,
  Container,
  FormControl,
  Input,
  InputLabel,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { toast } from 'react-toastify'

function Home() {
  const locationOption = [
    { city: 'Tampa', postalCode: '33602' },
    { city: 'Plant City', postalCode: '33566' },
  ]
  const [formData, setFormData] = useState({
    postalCode: '',
    productCategory: '',
    productSize: '',
  })
  const onSubmit = (e: any) => {
    e.preventDefault()
    toast.info('completed')
    console.log(formData)
  }
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const { postalCode, productCategory, productSize } = formData
  return (
    <>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            m: 'auto',
            paddingTop: '32px',
          }}>
          <FormControl>
            <Autocomplete
              sx={{
                width: '16em',
              }}
              id='postalCode'
              freeSolo
              options={locationOption.map((option) => option.postalCode)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  value={postalCode}
                  label='Search Postal Code...'
                  onChange={onChange}
                />
              )}></Autocomplete>
          </FormControl>
          <FormControl variant='filled' sx={{ width: 256 }}>
            <InputLabel>Product Type</InputLabel>
            <Select
              id='productCategory'
              value={productCategory}
              onChange={onChange}>
              <MenuItem value='Rolloff'>Rolloff</MenuItem>
              <MenuItem value='Bin'>Front Load Bin</MenuItem>
              <MenuItem value='Portalet'>Port-a-John</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: '16em',
            }}
            variant='outlined'>
            <InputLabel id='productSize'>Product Size</InputLabel>
            <Select
              labelId='productSize'
              id='demo-simple-select-filled'
              value={productSize}
              onChange={onChange}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{
              width: '16em',
              height: '4em',
            }}
            variant='outlined'
            type='submit'>
            Search
          </Button>
        </Box>
      </form>

      <Container
        sx={{
          marginTop: '4em',
          minHeight: '60vh',
          backgroundColor: '#8BC6E',
          backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Typography variant='h3'>33566</Typography>
          <Typography variant='h3'>20 cu yard</Typography>
        </Box>
        <Box></Box>
      </Container>
    </>
  )
}

export default Home
