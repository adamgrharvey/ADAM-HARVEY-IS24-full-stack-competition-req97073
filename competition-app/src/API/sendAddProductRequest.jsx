import axios from "axios";
const backendURL = 'http://localhost:3000'

export default function sendAddProductRequest(product) {

  // deep copy
  let reqData = { ...product };

  // encode URIs for special characters
  reqData.productName = encodeURI(reqData.productName);
  reqData.scrumMasterName = encodeURI(reqData.scrumMasterName);
  reqData.productOwnerName = encodeURI(reqData.productOwnerName);
  for (let i = 0; i < reqData.developers.length; i++) {

    reqData.developers[i] = encodeURI(reqData.developers[i]);
    console.log(reqData.developers);
  }

  return new Promise((resolve, reject) => {
    axios
      .post(`${backendURL}/api/products/`, product, {
        headers: {
          'content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
      })
      .then((res) => {
        // if server returns 201 (success)
        if (res.status === 201) {
          console.log(res);
          resolve(res);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  })
}