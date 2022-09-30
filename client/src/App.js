import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Nav } from './components/nav/Nav';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <>
      <header className="App-header">
      <h1>hello</h1>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={ <Homepage/>} />
     
          <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login setLoginUser={setLoginUser} />}/>
           
        </Routes>
        </BrowserRouter>
        </header>
    </>
  );
}

export default App;