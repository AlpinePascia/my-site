import React from 'react';
import './styles/global.scss';
import './styles/app-layout.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="Layout">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
