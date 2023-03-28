import './App.css';
import { Button } from '@mui/material';
import axios from 'axios';
import ProductList from './components/ProductList';

// Our main app, simply displays ProductList. ProductList is the main component used for the app.
function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
