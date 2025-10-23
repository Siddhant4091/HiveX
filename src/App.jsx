import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Settings from './pages/Settings'
import SignIn from './pages/SignIn'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'
import './App.css'

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Route - Sign In */}
      <Route 
        path="/signin" 
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <SignIn />
        } 
      />

      {/* Protected Routes - Wrapped in Layout */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<Home />} />
                <Route path="/services" element={<Home />} />
                <Route path="/contact" element={<Home />} />
                {/* Catch all - redirect to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App