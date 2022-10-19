import SideBar from './sidebar';
import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Front from './components/front';
import Profile from './components/profile';
import SignUp from './components/signUp';
import "./css/volt.css"
import { context } from './context/context'
import LogIn from './components/logIn';
import './../node_modules/react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner'
import Catagory from './components/catagory';



function App() {

  const { isloged, setIsloged } = useContext(context)

  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log("Value from local store ");
    console.log(user);
    console.log(typeof user);
    if (user === 'true') {
      console.log('local', localStorage.getItem('user'));
      console.log('details get', localStorage.getItem('details'));
      setIsloged('true')
    } else {
      setIsloged('false');
    }
  }, [isloged])

  return (<>

    <div className="custm-loader d-none" id="mainLoaderElement">
      <TailSpin color="#red" height={200} width={200} />
    </div>



    <ToastContainer />
    {
      console.log('islogedin', isloged)
    }
    {isloged === 'true' ? <SideBar /> : ''}
    < Routes >

      {
        isloged == 'true' ?
          <>
            <Route path='/dashboard' element={<Front />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/catagory' element={<Catagory />}></Route>
          </> :
          <>
            <Route path='/' element={<LogIn />}></Route>
            <Route path='/login' element={<LogIn />}></Route>
            <Route path='/sign-up' element={< SignUp />} ></Route>

          </>
      }

    </Routes >
  </>)
}

export default App;
