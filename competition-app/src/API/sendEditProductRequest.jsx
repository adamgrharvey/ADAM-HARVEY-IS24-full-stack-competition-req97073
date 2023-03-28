import axios from "axios";
const backendURL = 'http://localhost:3000';

export default function sendEditProductRequest(product) {

  // deep copy
  let reqData = { ...product };

  // encode URIs for special characters
  reqData.productName = encodeURI(reqData.productName);
  reqData.scrumMasterName = encodeURI(reqData.scrumMasterName);
  reqData.productOwnerName = encodeURI(reqData.productOwnerName);
  for (let i = 0; i < reqData.developers.length; i++) {
    reqData.developers[i] = encodeURI(reqData.developers[i]);
  }

  return new Promise((resolve, reject) => {
    axios
      .put(`${backendURL}/api/products/${reqData.productId}`, product, {
        headers: {
          'content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
      })
      .then((res) => {
        // if server returns 202 (success)
        if (res.status === 202) {
          resolve(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  })
}