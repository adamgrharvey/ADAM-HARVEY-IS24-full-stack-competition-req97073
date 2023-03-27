import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList(props) {

  const backendURL = 'http://localhost:3000'

  const [products, setProducts] = useState();

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
          setProducts({ ...res.data })

        }
      })
      .catch((err) => {
        console.log(err);
      });
  }



  useEffect(() => {
    getApi();
  }, [])

  useEffect(() => {
    if (products !== undefined) {
      console.log(Object.values(products));
    }

  }, [products])

  if (products !== undefined) {
    return (
      <div className="text-lg">
        <table>
          <tr>
            <th>Product Number</th>
            <th>Product Name</th>
            <th>Scrum Master</th>
            <th>Product Owner</th>
            <th>Developers</th>
            <th>Start Date</th>
            <th>Methodology</th>
          </tr>
          {Object.values(products).map((i, index) =>
            <tr>
              <td>{i.productId}</td>
              <td>{i.productName}</td>
              <td>{i.scrumMasterName}</td>
              <td>{i.productOwnerName}</td>
              <td><div>{i.developers && i.developers.map((i) => <div>{`${i}`}</div>)}</div></td>
              <td>{i.startDate}</td>
              <td>{i.methodology}</td>

            </tr>)}
        </table>
      </div>
    )
  }


}