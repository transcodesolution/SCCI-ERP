import React from 'react';
import './App.css';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import MainRoute from './Components/Route/MainRoute';
import MainComponent from './Components/Layout/MainComponent';
// import Sidebar1 from './Components/Commom/Sidebar';

function App() {
  const { token } = useSelector((state) => state.auth);
  console.log(token)

  return (
    <div className="App">
      {!token ? <Login /> : <> <MainRoute /></>}

    </div>
  );
}

export default App;


