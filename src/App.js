import React from 'react';
import './styles/global.scss';
import Layout from './components/Layout';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
