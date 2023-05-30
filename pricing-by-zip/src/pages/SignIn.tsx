import { AccountCircle } from '@mui/icons-material'
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Stack,
  Typography,
  Fab,
} from '@mui/material'
import PasswordIcon from '@mui/icons-material/Password'

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function SignIn() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = (e: any) => {
    e.preventDefault()

    const dummyCreds = {
      email: 'test@gmail.com',
      password: 'testadmin',
    }
    if (email === dummyCreds.email && password === dummyCreds.password) {
      navigate('/')
    } else {
      toast.error('Invalid User Credentials')
    }
  }

  return (
    <>
      <Typography variant='h3'>Welcome to Pricing by Zip Code</Typography>
      <Paper
        elevation={6}
        variant='outlined'
        square
        sx={{
          width: '60vw',

          marginTop: '32px',
          p: 8,
        }}>
        <form onSubmit={onSubmit}>
          <Stack>
            <FormControl variant='standard'>
              <InputLabel htmlFor='input-with-icon-adornment'>Email</InputLabel>
              <Input
                id='email'
                placeholder='johndoe@gmail.com'
                startAdornment={
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                }
                onChange={onChange}
                value={email}
              />
            </FormControl>
            <FormControl variant='standard'>
              <InputLabel htmlFor='input-with-icon-adornment'>
                Password
              </InputLabel>
              <Input
                id='password'
                type='password'
                onChange={onChange}
                value={password}
                startAdornment={
                  <InputAdornment position='start'>
                    <PasswordIcon />
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              sx={{
                p: 2,
                mt: 2,
              }}
              type='submit'
              variant='outlined'>
              Sign In
            </Button>
          </Stack>
        </form>
        <Link to='/sign-up'>
          <Fab variant='extended'>
            <AccountCircle sx={{ mr: 1 }} />
            Sign Up Instead
          </Fab>
        </Link>
      </Paper>
    </>
  )
}

export default SignIn
