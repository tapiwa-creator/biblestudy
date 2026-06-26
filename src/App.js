import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/Layout';
import AppRoutes from './Routes';

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;