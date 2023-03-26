import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
        console.log(res.data);
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
      <button
        onClick={getApi}
      >Get</button>
      <button
        onClick={createFakeData}
      >Create</button>
    </div>
  );
}

export default App;
