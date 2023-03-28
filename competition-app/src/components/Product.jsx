import { useState, useEffect } from "react"
import { Button, Modal } from "@mui/material";
export default function Product(props) {

  return (
    <tr className={`whitespace-nowrap`}>
      <td className={`p-5 border border-slate-700`}>{props.product.productId}</td>
      <td className={`p-5 border border-slate-700`}>{props.product.productName}</td>
      <td className={`p-5 border border-slate-700`}>{props.product.scrumMasterName}</td>
      <td className={`p-5 border border-slate-700`}>{props.product.productOwnerName}</td>
      <td className={`p-6 border border-slate-700`}><div>{props.product.developers && props.product.developers.map((i,index) => <div key={`product-${props.product.productId}-array-${index}`}>{`${i}`}</div>)}</div></td>
      <td className={`p-5 border border-slate-700`}>{props.product.startDate}</td>
      <td className={`p-5 border border-slate-700`}>{props.product.methodology}</td>
      <td className="!bg-white">
        <Button key={`edit-product-${props.product.productId}`}
        onClick={() => 
          {
            props.setModalData(
              {
                productId: props.product.productId,
                productName: props.product.productName,
                scrumMasterName: props.product.scrumMasterName,
                productOwnerName: props.product.productOwnerName,
                developers: props.product.developers,
                startDate: props.product.startDate,
                methodology: props.product.methodology
              }
              );
            props.handleOpen();
            
          }}
      className="!ml-3" variant="contained">Edit</Button>
      </td>
    </tr>
  )

}