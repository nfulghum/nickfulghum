import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import PortfolioRoutes from './routes/PortfolioRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <PortfolioRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
