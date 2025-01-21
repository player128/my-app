import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import { Navbar } from './components/UI/navbar/Navbar';
import { AppRouter } from './components/AppRouter';
import { AuthContext } from './context';
import { useContext, useEffect, useState } from 'react';

function App() {
  // console.log('render App', Date.now() );
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
      setLoading(false);
    }
    // console.log('useEffect auth', Date.now());
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;