import { useState } from 'react'

import {
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  NativeSelect,
} from '@mui/material'

import ProductOption from '../components/ProductOption'
import { toast } from 'react-toastify'
import productPricing from '../productPricing'
import productInfo from '../productInfo'

function Home() {
  const [formData, setFormData] = useState({
    postalCode: '',
    productCategory: '',
    productSize: '',
  })
  const onSubmit = (e: any) => {
    e.preventDefault()
    toast.success('completed')
    console.log(formData)
  }
  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
    console.log(e.target.id)
  }

  const { postalCode, productCategory, productSize } = formData
  return (
    <>
      <Container>
        <Typography variant='h2'>Let's Get Started...</Typography>
      </Container>
      <Container
        sx={{
          marginTop: '64px',
          border: '2px solid green',
          minHeight: '60vh',
          borderRadius: '20px',
          p: 5,
        }}>
        <form>
          <FormGroup
            row
            sx={{
              justifyContent: 'space-between',
            }}>
            <Typography
              variant='h4'
              sx={{
                alignSelf: 'center',
                paddingRight: 12,
              }}>
              Enter a Zip Code
            </Typography>

            <TextField
              required
              id='postalCode'
              label='Postal Code'
              variant='standard'
              onChange={handleChange}
              value={postalCode}
              sx={{
                width: 480,
              }}
              inputProps={{ style: { fontSize: 40 } }}
            />
          </FormGroup>
          <FormGroup
            row
            sx={{
              justifyContent: 'space-between',
              marginTop: '32px',
            }}>
            <Typography
              variant='h4'
              sx={{
                alignSelf: 'center',
                paddingRight: 12,
              }}>
              Select a Product
            </Typography>
            <FormControl
              sx={{
                width: 480,
              }}>
              <InputLabel variant='standard'>Product</InputLabel>
              <NativeSelect
                defaultValue={productCategory}
                onChange={handleChange}
                inputProps={{
                  id: 'productCategory',
                  style: { fontSize: '1.5em' },
                }}>
                <option value={'Rolloff'}>Rolloff</option>
                <option value={'Bin'}>Front Load Bin</option>
                <option value={'Portalet'}>Portalet</option>
              </NativeSelect>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ProductOption />
          </FormGroup>
        </form>
      </Container>
    </>
  )
}

export default Home
