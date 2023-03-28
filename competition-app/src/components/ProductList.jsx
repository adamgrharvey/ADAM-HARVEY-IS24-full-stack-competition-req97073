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
  const [open, setOpen] = useState(false);
  const [refreshData, setRefreshData] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // State for search.
  const [searchType, setSearchType] = useState("Developer");
  const [search, setSearch] = useState("");


  const getApi = function (searchType, search) {
    if (search.length >= 2) {
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
      axios
        .get(`${backendURL}/api`, {
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
    }
  }

  useEffect(() => {
    if (refreshData) {
      setRefreshData(false);
      getApi(searchType, search);
    }
  }, [refreshData])

  useEffect(() => {
    if (search.length >= 2) {
      setRefreshData(true);
    }
  }, [search])


  // If we have the API data (not undefined) return the table.
  if (products !== undefined) {
    return (
      <div>
        <SearchBar search={search} setSearch={setSearch} setSearchType={setSearchType} />
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
                <Product searchType={searchType} search={search} handleOpen={handleOpen} handleClose={handleClose} setModalData={setModalData} key={`product-${i.productId}`} product={i} />)}
            </tbody>
          </table>
          <ProductModal setRefreshData={setRefreshData} setProducts={setProducts} modalData={modalData} setModalData={setModalData} open={open} handleClose={handleClose} handleOpen={handleOpen} />
        </div >
      </div>

    )
  }


}