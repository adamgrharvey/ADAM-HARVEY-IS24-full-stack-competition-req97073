import { Button } from "@mui/material"

// Our 'Add Product' Button on the landing page.
export default function AddProduct(props) {

  return (
    <div className="mt-7">
      <Button color="secondary" variant="contained"
        // If we click the add button
        onClick={() => {
          // set all the modal data to be empty.
          props.setModalData({
            // we will set the productId to 0 here, which we will use later to tell axios to send a POST request (CREATE product) instead of a PUT request (UPDATE product);
            productId: 0,
            productName: "",
            scrumMasterName: "",
            productOwnerName: "",
            developers: [],
            startDate: "",
            methodology: ""
          });
          // once we have emptied our Modal data, open it up.
          props.handleOpen();
        }}
      >
        Add Product
      </Button>
    </div>
  )
}