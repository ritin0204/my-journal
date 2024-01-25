import React, {useContext} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Login from './pages/Login/Login';
import Error from './pages/Error/Error';
import SignUp from './pages/SignUp/SignUp';
import Activities from './pages/Activities/Activities';
import Account from './pages/Account/Account';
import Journal from './pages/Journal/Journal';
import {UserContext} from './contexts/UserProvider';


/*
 * Importing all css in one file
*/
import './assests/css/App.css';
import './assests/css/home-page.css';
import './assests/css/ui.css';
import './assests/css/login.css';
import './assests/css/dashboard.css';
import './assests/css/journal-page.css';
import './assests/css/account.css';
import './assests/css/activity.css';

/**
 * App component.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  const {user} = useContext(UserContext);

  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              user ? <Home/> : <Navigate to="/login" />} />
            <Route path="/account" element={
              user ? <Account/> : <Navigate to="/login" />} />
            <Route path="/activities" element={
              user ? <Activities/>:<Navigate to="/login" />} />
            <Route path="/journals" element={
              user ? <Journal/>:<Navigate to="/login" />} />

            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
