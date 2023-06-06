import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Preferences from './pages/Preferences'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Quote from './pages/Quote'

function App() {
  return (
    <main>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/preferences' element={<Preferences />} />
          <Route path='/quote/:id' element={<Quote />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </main>
  )
}

export default App
