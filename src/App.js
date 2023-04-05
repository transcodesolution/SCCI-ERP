import React from 'react';
import './App.css';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import MainRoute from './Components/Route/MainRoute';
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
