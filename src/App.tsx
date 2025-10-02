import { useContext, useEffect, useState } from 'react';
import { app } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Router from './components/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';
import ThemeContext from 'context/ThemeContext';

function App() {
  const auth = getAuth(app);
  const context = useContext(ThemeContext);
  const [isAuth, setIsAuth] = useState<boolean>(!!auth?.currentUser);
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }

      setInit(true);
    });
  }, [auth]);

  return (
    <div className={context.theme === 'light' ? 'light' : 'dark'}>
      <ToastContainer />
      {init ? <Router isAuth={isAuth} /> : <Loader />}
    </div>
  );
}

export default App;
