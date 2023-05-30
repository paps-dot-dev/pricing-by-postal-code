import { AccountCircle } from '@mui/icons-material'
import {
  Button,
  Fab,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import PasswordIcon from '@mui/icons-material/Password'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function SignUp() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
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
      <Typography variant='h3'>Sign Up</Typography>
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
                id='name'
                placeholder='John Doe'
                startAdornment={
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                }
                onChange={onChange}
                value={name}
              />
            </FormControl>
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
                placeholder='Create a Strong Password'
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
              Sign Up
            </Button>
          </Stack>
        </form>
        <Link to='/sign-in'>
          <Fab variant='extended'>
            <AccountCircle sx={{ mr: 1 }} />
            Sign In Instead
          </Fab>
        </Link>
      </Paper>
    </>
  )
}

export default SignUp
