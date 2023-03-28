import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import * as React from 'react';
import ProductModal from "./ProductModal";
import SearchBar from "./SearchBar";
import AddProduct from "./AddProduct";
import getAllProducts from "../API/getAllProducts";

// Main component for app, the table of products.
export default function ProductList(props) {

  const backendURL = 'http://localhost:3000'

  const [products, setProducts] = useState();

  // State for the product creation and edit modal.
  const [modalData, setModalData] = useState({});
  const [serverMessage, setServerMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [refreshData, setRefreshData] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // State for search.
  const [searchType, setSearchType] = useState("Developer");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState();

  // Update our front page when 'refreshData' state sets to true.
  useEffect(() => {
    if (refreshData === true) {
      // dont need to update again after this.
      setRefreshData(false);
      // Request all products from API.
      getAllProducts(searchType, search).then((results) => {
        // set our products state to the results and stop loading.
        setProducts(results);
        setLoading(false);
      }).catch((error) => {
        // if we get an error we aren't loading anymore.
        setLoading(false);
        // if we have a server error, show that on the front page.
        if (error.response) {
          // set Modal error to show what the server said was wrong.
          setServerMessage(error.response.data);
        } else {
          // incase the server is not responding, show generic browser error. "Network Error"
          setServerMessage(error.message);
        }
      })
    }
  }, [refreshData])

  useEffect(() => {
    if (products) {
      setCount(Object.keys(products).length)
    }
  }, [products])

  // Remove the server message after its shown for 7 seconds.
  useEffect(() => {
    // If the server message is "Network Error", the API is not working properly. Don't dismiss this error.
    if (serverMessage !== "" && (serverMessage !== "Network Error")) {
      setTimeout(() => {
        setServerMessage("");
      }, 7000)
    }
  }, [serverMessage])



  // If we have the API data (not undefined) return the table.
  if (products !== undefined) {
    return (
      <div>
        <p>{serverMessage ? `Server message: ${serverMessage}` : ""}</p>
        <div className="flex justify-evenly">
          <AddProduct setRefreshData={setRefreshData} modalData={modalData} setModalData={setModalData} open={open} handleClose={handleClose} handleOpen={handleOpen} />
          <SearchBar setRefreshData={setRefreshData} search={search} setSearch={setSearch} setSearchType={setSearchType} />
        </div>

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

          <ProductModal setServerMessage={setServerMessage} setRefreshData={setRefreshData} setProducts={setProducts} modalData={modalData} setModalData={setModalData} open={open} handleClose={handleClose} handleOpen={handleOpen} />
        </div >
        <p>{count === 0 ? "No Results found." : ""}</p>
      </div >

    )
  } else {
    // otherise, the API must not be working, display Error message.
    return (
      <div>
        <p>{serverMessage ? `Server message: ${serverMessage}` : ""}</p>
      </div>
    )
  }


}