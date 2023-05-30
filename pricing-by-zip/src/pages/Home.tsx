import { useState } from 'react'

import { FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material'
import { toast } from 'react-toastify'

function Home() {
  const [formData, setFormData] = useState({
    location: '',
    productCategory: '',
    productSize: '',
  })
  const onSubmit = () => {
    toast.info('completed')
  }
  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const { location, productCategory, productSize } = formData
  return (
    <>
      <form onSubmit={onSubmit}>
        <FormControl>
          <InputLabel htmlFor='Enter A City or Zip Code' />
          <Input
            id='location'
            placeholder='33566'
            value={location}
            onChange={onChange}
          />
        </FormControl>
        <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Product Type</InputLabel>
          <Select
            id='productCategory'
            value={productCategory}
            onChange={onChange}>
            <MenuItem>
              <em>None</em>
            </MenuItem>
            <MenuItem value='Rolloff'>Rolloff</MenuItem>
            <MenuItem>Front Load Bin</MenuItem>
            <MenuItem>Port-a-John</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-filled-label'>Age</InputLabel>
          <Select
            labelId='demo-simple-select-filled-label'
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
      </form>
    </>
  )
}

export default Home
