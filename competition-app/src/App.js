import './App.css';
import { Button } from '@mui/material';
import axios from 'axios';
import ProductList from './components/ProductList';
const backendURL = 'http://localhost:3000'

const getApi = function () {
  axios
    .get(`${backendURL}/api`, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then((res) => {
      // if server returns 200 (success)
      if (res.status === 200) {
        return (res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const createFakeData = function () {

  let postData = {

    productName: "NovaForge",
    productOwnerName: "Jenna Martin",
    developers: [
      "Jenna Martin",
      "Jared Thomas"
    ],
    scrumMasterName: "Jennifer Garcia",
    startDate: "2023-03-26",
    methodology: "Agile"

  };

  axios
    .post(`${backendURL}/api/products`, postData, {
      headers: {
        'content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      },
    })
    .then((res) => {
      // if server returns 200 (success)
      if (res.status === 200) {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const edit = function () {

  let putData = {
    productName: "VaporQuest",
    productOwnerName: "Jared Thomas",
    developers: [
      "Jared Thomas",
      "Trevor Smith",
      "Gino Brown",
      "Jessica Miller",
      "Jenna Martin"
    ],
    scrumMasterName: "Jennifer Garcia",
    startDate: "2023-03-26",
    methodology: "Waterfall"
  };
  axios
    .put(`${backendURL}/api/products/1`, putData, {
      headers: {
        'content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      },
    })
    .then((res) => {
      // if server returns 200 (success)
      if (res.status === 200) {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });

}


function App() {
  return (
    <div className="App">
      <div>
        <Button variant="contained"
          onClick={getApi}
        >Get</Button>
        <Button variant="contained" className='!m-5'
          onClick={createFakeData}
        >Create</Button>
        <Button variant="contained"
          onClick={edit}
        >Edit</Button></div>

      <ProductList />

    </div>
  );
}

export default App;
