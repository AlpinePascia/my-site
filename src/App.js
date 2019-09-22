import React from 'react';
import './styles/global.scss';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App theme-dark">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
