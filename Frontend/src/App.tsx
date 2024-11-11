import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import MainLayout from './layout/MainLayout'
import { useEffect, useState } from 'react'

function App() {

  const [loading, setIsLoading] = useState(true);
  const navigate = useNavigate ();

  const fetchUser = (token: string) => {
    try {
      setIsLoading(false)
      return
    } catch (error) {
      navigate("/login")
      return
    }
  }
  useEffect (() => {
    const token = localStorage.getItem("token") || ''

    if(!token) {
        navigate("/login")
        return
    } else {
      (async() => {
        await fetchUser(token);
      }) ()
    }
  }, [])

  if (loading) {
    return <div className="">loading...</div>
  }

  return (
    <>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  )
}

export default App
