import { useState, useEffect } from "react"
import { Button, Modal } from "@mui/material";
export default function Product(props) {

  // Where individual product data will be kept for each component instance.
  const [product, setProduct] = useState(props.product);


  // Sorts Developers alphabetically when component loads.
  useEffect(() => {
    setProduct((prev) => ({ developers: prev.developers.sort(), ...prev}));
  },[])

  return (
    <tr>
      <td className={`p-5 border border-slate-700`}>{product.productId}</td>
      <td className={`p-5 border border-slate-700`}>{product.productName}</td>
      <td className={`p-5 border border-slate-700`}>{product.scrumMasterName}</td>
      <td className={`p-5 border border-slate-700`}>{product.productOwnerName}</td>
      <td className={`p-5 border border-slate-700`}><div>{product.developers && product.developers.map((i,index) => <div key={`product-${product.productId}-array-${index}`}>{`${i}`}</div>)}</div></td>
      <td className={`p-5 border border-slate-700`}>{product.startDate}</td>
      <td className={`p-5 border border-slate-700`}>{product.methodology}</td>
      <td className="!bg-white">
        <Button key={`edit-product-${product.productId}`}
        onClick={() => 
          {
            props.setModalData(
              {
                id: product.productId,
                productName: product.productName,
                scrumMasterName: product.scrumMasterName,
                productOwnerName: product.productOwnerName,
                developers: product.developers,
                startDate: product.startDate,
                methodology: product.methodology
              }
              );
            props.handleOpen();
            
          }}
      className="!ml-3" variant="contained">Edit</Button>
      </td>
    </tr>
  )

}