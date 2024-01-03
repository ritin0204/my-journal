import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';


/*
 * Importing all css in one file
*/
import './assests/css/App.css';
import './assests/css/home-page.css';

/**
 * App component.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
