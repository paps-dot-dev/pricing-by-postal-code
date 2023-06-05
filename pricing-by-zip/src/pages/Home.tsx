import { useState, useRef } from 'react'

import {
  Container,
  TextField,
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  NativeSelect,
  Paper,
  Button,
  Box,
  ButtonGroup,
} from '@mui/material'

import { toast } from 'react-toastify'
import productPricing from '../productPricing'
import productInfo from '../productInfo'
import ProductCards from '../components/ProductCards'

function Home() {
  const initialSearchArray: (string | number)[] = []
  const [searchProduct, setSearchProduct] = useState(initialSearchArray)
  const [isSearch, setIsSearch] = useState(false)

  const [formData, setFormData] = useState({
    searchPostalCode: '',
    searchProductCategory: '',
    productSize: '',
  })

  interface formData {
    [searchPostalCode: string]: number
    [searchProductCategory: string]: string
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    const filteredProducts = productPricing.find(
      (product) => product.postalCode === parseInt(searchPostalCode)
    )
    if (filteredProducts) {
      setSearchProduct(filteredProducts)
      setIsSearch(true)
    } else {
      toast.error('No Results Found')
      setIsSearch(false)
    }
  }
  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleClear = () => {
    setFormData({
      searchPostalCode: '',
      searchProductCategory: '',
      productSize: '',
    })
    toast.info('Form Data Cleared')
  }

  const { searchPostalCode, searchProductCategory } = formData
  return (
    <>
      <Container maxWidth='xl'>
        <Typography variant='h2'>Let's Get Started...</Typography>
      </Container>
      <Paper elevation={5}>
        <Container
          maxWidth='xl'
          sx={{
            marginTop: '32px',

            minHeight: '840px',
            borderRadius: '20px',
            p: 5,
          }}>
          <form onSubmit={onSubmit}>
            <Box
              sx={{
                border: '2px solid green',
                borderRadius: '16px',
                maxWidth: '50%',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-between',
                height: '256px',
                ml: '0',
                p: 2,
              }}>
              <FormGroup row>
                <Typography
                  variant='h5'
                  sx={{
                    alignSelf: 'center',
                    paddingRight: 12,
                  }}>
                  Enter a Zip Code
                </Typography>

                <TextField
                  required
                  id='searchPostalCode'
                  label='Postal Code'
                  variant='standard'
                  onChange={handleChange}
                  value={searchPostalCode}
                  sx={{
                    width: 240,
                  }}
                  inputProps={{ style: { fontSize: 20 } }}
                />
              </FormGroup>
              <FormGroup row>
                <Typography
                  variant='h5'
                  sx={{
                    alignSelf: 'center',
                    paddingRight: 12,
                  }}>
                  Select a Product
                </Typography>
                <FormControl
                  sx={{
                    width: 240,
                  }}>
                  <InputLabel variant='standard'>Product</InputLabel>
                  <NativeSelect
                    value={searchProductCategory}
                    onChange={handleChange}
                    inputProps={{
                      id: 'searchProductCategory',
                      style: { fontSize: '1em' },
                    }}>
                    <option></option>
                    <option value={'Rolloff'}>Rolloff</option>
                    <option value={'Bin'}>Front Load Bin</option>
                    <option value={'Portalet'}>Portalet</option>
                  </NativeSelect>
                </FormControl>
              </FormGroup>
              <ButtonGroup>
                <Button
                  sx={{
                    p: 2,
                    mr: 0,
                    ml: 'auto',
                    width: '256px',
                  }}
                  variant='contained'
                  type='submit'>
                  Search
                </Button>
                <Button
                  sx={{
                    p: 2,
                    mr: 0,
                    ml: 'auto',
                    width: '256px',
                  }}
                  variant='outlined'
                  color='secondary'
                  onClick={handleClear}>
                  Clear
                </Button>
              </ButtonGroup>
            </Box>

            <FormGroup>
              {isSearch ? (
                <ProductCards
                  products={searchProduct}
                  category={searchProductCategory}
                  info={productInfo}
                />
              ) : (
                <div>no results</div>
              )}
            </FormGroup>
          </form>
        </Container>
      </Paper>
    </>
  )
}

export default Home
