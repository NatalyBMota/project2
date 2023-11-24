import React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import CardWrapper from './CardWrapper.jsx';
import Footer from './Footer.jsx';

let yr = new Date();
yr = yr.getFullYear();

function App() {
    return <div>
        <Header />
        <Navbar />
        <Main />
        <CardWrapper />
        <Footer year={yr}/>
    </div>;
}

export default App;