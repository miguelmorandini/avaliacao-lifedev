import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

import { AuthProvider } from './context/AuthContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'
import About from './pages/About/About'
import Search from './pages/Search/Search'
import Post from './pages/Post/Post'
import EditPost from './pages/EditPost/EditPost'
import PrivateRoute from './route/PrivateRoute'


function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/search' element={<Search />} />
              <Route path='posts/:id' element={<Post />} />

              <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />

              <Route path='/posts/create' element={<PrivateRoute> <CreatePost /> </PrivateRoute>} />
              <Route path='/dashboard' element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
              <Route path='/posts/edit/:id' element={<PrivateRoute> <EditPost /> </PrivateRoute>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
