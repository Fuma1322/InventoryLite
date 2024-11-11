/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import MainLayout from './layout/MainLayout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, UserSlicePath } from './provider/slice/user.slice';

function App() {
  const [loading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(UserSlicePath);
  
  const fetchUser = async (token: string) => {
    try {
      const { data } = await axios.get(import.meta.env.VITE_BACKEND_URL + "/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      dispatch(setUser(data.user));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token") || '';

    if (!token) {
      navigate("/login");
    } else {
      if (selector) {
        setIsLoading(false);
      } else {
        (async () => {
          await fetchUser(token);
        })();
      }
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
