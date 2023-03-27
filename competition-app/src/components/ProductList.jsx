import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
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

  // If we have the API data (not undefined) return the table.
  if (products !== undefined) {
    return (
      <div className="flex justify-center text-lg mt-5 font-sans font-medium table-wrp block max-h-96">
        <table className="sticky top-0 border-collapse border-spacing-auto border-slate-500 border-b sticky top-0">
          <thead>
            <tr className="text-xl text-white">
              <th className="bg-[#1976d2] sticky top-0 border border-slate-600">Product No.</th>
              <th className="bg-[#1976d2] sticky top-0 border border-slate-600">Product Name</th>
              <th className="bg-[#1976d2] sticky top-0 border border-slate-600">Scrum Master</th>
              <th className="bg-[#1976d2] sticky top-0 border border-slate-600">Product Owner</th>
              <th className="bg-[#1976d2] sticky top-0 border border-slate-600">Developers</th>
              <th className="bg-[#1976d2] sticky top-0 border border-slate-600">Start Date</th>
              <th className="bg-[#1976d2] sticky top-0 border border-slate-600">Methodology</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="h-96 overflow-y-auto">
            {Object.values(products).map((i) =>
              <Product key={i.productId} product={i} />)}
          </tbody>
        </table>
      </div >
    )
  }


}