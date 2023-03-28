import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import * as React from 'react';
import ProductModal from "./ProductModal";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProductList(props) {

  const backendURL = 'http://localhost:3000'

  const [products, setProducts] = useState();

  // State for the product creation and edit modal.
  const [modalData, setModalData] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

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
              <Product handleOpen={handleOpen} handleClose={handleClose} setModalData={setModalData} key={`product-${i.productId}`} product={i} />)}
          </tbody>
        </table>
        <ProductModal modalData={modalData} setModalData={setModalData} open={open} handleClose={handleClose} handleOpen={handleOpen}/>    
      </div >
    )
  }


}