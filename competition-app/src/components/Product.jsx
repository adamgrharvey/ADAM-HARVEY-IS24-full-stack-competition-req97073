import { useState, useEffect } from "react"
import { Button } from "@mui/material";
export default function Product(props) {



  const [product, setProduct] = useState(props.product);

  // Sorts Developers Alphabetically when 'product' state changes.
  useEffect(() => {
    setProduct((prev) => ({ developers: prev.developers.sort(), ...prev}));
  },[product])

  return (
    <tr>
      <td className={`p-5 border border-slate-700`}>{product.productId}</td>
      <td className={`p-5 border border-slate-700`}>{product.productName}</td>
      <td className={`p-5 border border-slate-700`}>{product.scrumMasterName}</td>
      <td className={`p-5 border border-slate-700`}>{product.productOwnerName}</td>
      <td className={`p-5 border border-slate-700`}><div>{product.developers && product.developers.map((i) => <div>{`${i}`}</div>)}</div></td>
      <td className={`p-5 border border-slate-700`}>{product.startDate}</td>
      <td className={`p-5 border border-slate-700`}>{product.methodology}</td>
      <td className="!bg-white"><Button className="!ml-3" variant="contained">Edit</Button></td>
    </tr>
  )

}