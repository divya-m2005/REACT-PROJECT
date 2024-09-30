import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import EbookReader from './components/EbookReader';
import CheckoutProcess from './components/CheckoutProcess';
import Reviews from './components/Reviews';
import Account from './components/Account';
import Login from './components/Login';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = React.useState('Catalog');

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="app">
      <Header />
      <div className="nav-buttons">
        <button onClick={() => handleNavigation('Catalog')} className={activeComponent === 'Catalog' ? 'active' : ''}>Catalog</button>
        <button onClick={() => handleNavigation('EbookReader')} className={activeComponent === 'EbookReader' ? 'active' : ''}>Ebook Reader</button>
        <button onClick={() => handleNavigation('CheckoutProcess')} className={activeComponent === 'CheckoutProcess' ? 'active' : ''}>Checkout</button>
        <button onClick={() => handleNavigation('Reviews')} className={activeComponent === 'Reviews' ? 'active' : ''}>Reviews</button>
        <button onClick={() => handleNavigation('Account')} className={activeComponent === 'Account' ? 'active' : ''}>Account</button>
        <button onClick={() => handleNavigation('Login')} className={activeComponent === 'Login' ? 'active' : ''}>Login</button>
      </div>
      <div className="content">
        {activeComponent === 'Catalog' && <Catalog />}
        {activeComponent === 'EbookReader' && <EbookReader />}
        {activeComponent === 'CheckoutProcess' && <CheckoutProcess />}
        {activeComponent === 'Reviews' && <Reviews />}
        {activeComponent === 'Account' && <Account />}
        {activeComponent === 'Login' && <Login />}
        
      </div>
       
      <Footer />
    </div>
  );
}

export default App;
