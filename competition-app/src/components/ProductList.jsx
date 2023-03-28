import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import * as React from 'react';
import ProductModal from "./ProductModal";
import SearchBar from "./SearchBar";

export default function ProductList(props) {

  const backendURL = 'http://localhost:3000'

  const [products, setProducts] = useState();

  // State for the product creation and edit modal.
  const [modalData, setModalData] = useState({});
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [refreshData, setRefreshData] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // State for search.
  const [searchType, setSearchType] = useState("Developer");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState();


  const getApi = function (searchType, search) {
    // If we there are characters in the search bar, use the search portion of the API when refreshing data.
    if (search.length >= 1) {
      axios
        // cleanup the request URL, downcase and remove spaces.
        .get(`${backendURL}/api/search/${searchType.toLowerCase().replace(/\s/g, '')}/${search.toLowerCase().replace(/\s/g, '%20')}`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // if server returns 200 (success)
          if (res.status === 200) {
            setProducts({ ...res.data })
          }
        })
        .catch((err) => {
          console.log(err);
        });

    } else {
      // If not searching, get all the products.

      axios
        .get(`${backendURL}/api`, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // if server returns 200 (success)
          if (res.status === 200) {
            // Set our table to show everything.
            setError("");
            setProducts({ ...res.data })
          }
        })
        // 
        .catch((err) => {
          setError(err.message);
          console.log(err);
        });
    }
  }

  useEffect(() => {
    if (refreshData === true) {
      setRefreshData(false);
      getApi(searchType, search);
    }
  }, [refreshData])

  useEffect(() => {
    if (products) {
      setCount(Object.keys(products).length)
    }
  }, [products])



  // If we have the API data (not undefined) return the table.
  if (products !== undefined) {
    return (
      <div>
        <p>{error ? `Error: ${error}` : ""}</p>
        <SearchBar setRefreshData={setRefreshData} search={search} setSearch={setSearch} setSearchType={setSearchType} />
        <div className="flex justify-center text-lg mt-5 font-sans font-medium table-wrp block max-h-96">
          <table className="sticky top-0 border-collapse border-spacing-auto border-slate-500 border-b">
            <thead>
              <tr className="text-xl text-white">
                <th className="bg-[#ff0000] border border-slate-600">{`Total: ${count}`}</th>
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
                <Product searchType={searchType} search={search} handleOpen={handleOpen} handleClose={handleClose} setModalData={setModalData} key={`product-${i.productId}`} product={i} />)}
            </tbody>
          </table>
          <ProductModal setRefreshData={setRefreshData} setProducts={setProducts} modalData={modalData} setModalData={setModalData} open={open} handleClose={handleClose} handleOpen={handleOpen} />
        </div >
      </div >

    )
  }


}