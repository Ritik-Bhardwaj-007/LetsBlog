import { useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth"
import './App.css'
import { useEffect } from 'react';

function App() {
  const [loading,setLoading]=useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData));
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false));
  },[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <outlet/> */}
        </main>
        <Footer/>
      </div>
   test
    </div>
  ):null
}

export default App
