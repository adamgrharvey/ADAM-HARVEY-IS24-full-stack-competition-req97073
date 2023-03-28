import './App.css';
import { Button } from '@mui/material';
import axios from 'axios';
import ProductList from './components/ProductList';
const backendURL = 'http://localhost:3000'

function App() {
  return (
    <div className="App">

      <ProductList />

    </div>
  );
}

export default App;
