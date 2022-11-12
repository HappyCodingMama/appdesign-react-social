import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {
  const { user } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <div className={`App theme-${darkMode ? 'dark' : 'light'}`}>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Register />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route
            path='/login'
            element={user ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/register'
            element={user ? <Navigate to='/' /> : <Register />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
