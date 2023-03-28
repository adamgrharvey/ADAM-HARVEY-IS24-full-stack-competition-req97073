import axios from "axios";
const backendURL = 'http://localhost:3000';

export default function getAllProducts(searchType, search) {
  // If we there are characters in the search bar, use the search portion of the API when refreshing data.
  if (search.length >= 1) {
    return new Promise((resolve, reject) => {
      axios
        // cleanup the request URL, downcase and encode.
        .get(`${backendURL}/api/products/search/${searchType.toLowerCase().replace(/\s/g, '')}/${encodeURI(search.toLowerCase())}`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // if server returns 200 (success)
          if (res.status === 200) {
            resolve({ ...res.data })
          }
        })
        .catch((err) => {
          reject(err);
        });
    })
  } else {
    // If not searching, get all the products.
    return new Promise((resolve, reject) => {
      axios
        .get(`${backendURL}/api/products`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // if server returns 200 (success)
          if (res.status === 200) {
            resolve({ ...res.data })
          }
        })
        .catch((err) => {
          reject(err);
        });
    })
  }
}