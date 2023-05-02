import React from 'react';
// import './App.css';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import MainRoute from './Components/Route/MainRoute';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import Sidebar1 from './Components/Commom/Sidebar';

function App() {
  const { token } = useSelector((state) => state.auth);
  console.log(token)

  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {!token ? <Login /> : <> <MainRoute /></>}

    </div>
  );
}

export default App;


