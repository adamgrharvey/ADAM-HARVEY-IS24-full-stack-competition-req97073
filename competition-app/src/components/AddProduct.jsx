import { Button } from "@mui/material"

export default function AddProduct(props) {

  return (
    <div className="mt-7">
      <Button color="secondary" variant="contained"
      onClick={() => {
        props.setModalData({
          productId: 0,
          productName: "",
          scrumMasterName: "",
          productOwnerName: "",
          developers: [],
          startDate: "",
          methodology: "Agile"
        });
        props.handleOpen();
      }}
      >
        Add Product
      </Button>

    </div>
  )
}