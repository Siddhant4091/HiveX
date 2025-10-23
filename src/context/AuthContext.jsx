import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (check session/token)
    const checkAuth = () => {
      const token = sessionStorage.getItem('authToken');
      if (token) {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  const login = (email, password) => {
    // In a real app, you'd validate credentials with an API
    // For now, we'll simulate a successful login
    if (email && password) {
      sessionStorage.setItem('authToken', 'dummy-token');
      sessionStorage.setItem('userEmail', email);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const loginWithGoogle = () => {
    // Simulate Google login
    sessionStorage.setItem('authToken', 'google-token');
    setIsAuthenticated(true);
  };

  const loginWithMicrosoft = () => {
    // Simulate Microsoft login
    sessionStorage.setItem('authToken', 'microsoft-token');
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userEmail');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        isLoading, 
        login, 
        loginWithGoogle,
        loginWithMicrosoft,
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};