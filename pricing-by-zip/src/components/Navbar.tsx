import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}>
        <BottomNavigation>
          <BottomNavigationAction
            label='Home'
            icon={<HomeIcon />}
            onClick={() => navigate('/')}
          />
          <BottomNavigationAction
            label='Preferences'
            icon={<SettingsIcon />}
            onClick={() => navigate('/preferences')}
          />
        </BottomNavigation>
      </Paper>
    </>
  )
}

export default Navbar
