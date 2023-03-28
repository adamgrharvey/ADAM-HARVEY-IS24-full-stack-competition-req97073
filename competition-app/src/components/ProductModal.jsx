import { Button, TextField, Modal, Typography, Box, MenuItem, Autocomplete, Chip } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import sendAddProductRequest from "../API/sendAddProductRequest";
import sendEditProductRequest from "../API/sendEditProductRequest";

// Styling for the modal.
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 440,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const methodologies = ['Agile', 'Waterfall'];

// Using Material UIs Modal popup to serve as a Form for adding/editing products.
export default function ProductModal(props) {

  // 'product' will be shorthand for the state of the currently selected Product to be populated into the modal.
  const product = props.modalData;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

    // clear the error message when the modal data is updated i.e. when a new Edit button is clicked.
    useEffect(() => {
      setError("");
    }, [props.modalData])

  // For simplicity, I split up the 'handleChange' functions into separate ones depending on the type of data they expect to see.
  // Used for Product name, scrum master, and product owner fields.
  const handleChange = (event, child) => {

    if (event.target.id === "product-name-input") {
      props.setModalData((prev) => ({ ...prev, productName: event.target.value }))
    } else if (event.target.id === "scrum-master-input") {
      props.setModalData((prev) => ({ ...prev, scrumMasterName: event.target.value }))
    } else if (event.target.id === "product-owner-input") {
      props.setModalData((prev) => ({ ...prev, productOwnerName: event.target.value }))
    }
  }
  // Used for the Developers multi-select form.
  const handleDevelopersChange = (event, child) => {
    if (child.length <= 5) {
      props.setModalData((prev) => ({ ...prev, developers: child }))
    }
  }
  // Used for the Methodology select box.
  const handleMethodChange = (event, child) => {
    // encode URIs for special characters
    props.setModalData((prev) => ({ ...prev, methodology: child.props.value }))
  }

  // Used for the date select box.
  const handleDateChange = (event, child) => {
    // encode URIs for special characters
    props.setModalData((prev) => ({ ...prev, startDate: `${event.$y}-${event.$M + 1}-${event.$D}` }))
  }

  // Logic to decide what to do when the save button is pressed.
  const handleSave = function () {
    // start Loading spinner
    setLoading(true);
    // If/Else to decide whether we are sending a POST or PUT request to Add or Edit product.
    // If product.productId === 0, we are adding a new product.
    if (product.productId === 0) {
      sendAddProductRequest(product).then((results) => {
        // change all our states depending on the result.
        // refresh our home page.
        props.setRefreshData(true);
        // tell the Load button to stop spinning
        setLoading(false);
        // Show responsive message at top of screen depending on what was done.
        props.setServerMessage(results.data);
        // close the modal
        props.handleClose();
      }).catch((error) => {
        // If we get an error, stop loading
        setLoading(false);
        if (error.response) {
          // set Modal error to show what the server said was wrong.
          setError(error.response.data);
        } else {
          // incase the server is not responding, show generic browser error. "Network Error"
          setError(error.message);
        }

      })
      /* If product.productId !== 0, we must be editing an existing one*/
    } else {
      sendEditProductRequest(product).then((results) => {
        // change all our states depending on the result.
        // refresh our home page.
        props.setRefreshData(true);
        // tell the Load button to stop spinning
        setLoading(false);
        // Show responsive message at top of screen depending on what was done.
        props.setServerMessage(results.data);
        // close the modal
        props.handleClose();
      }).catch((error) => {
        // If we get an error, stop loading
        setLoading(false);
        if (error.response) {
          // set Modal error to show what the server said was wrong.
          setError(error.response.data);
        } else {
          // incase the server is not responding, show generic browser error. "Network Error"
          setError(error.message);
        }

      })
    }
  }

  if (product) {
    return (
      <div>
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography className="!mb-2" variant="h5" component="h2">
              {product.productId === 0 ? `Add New Product` : `Edit Product ${product.productId}`}
            </Typography>
            <TextField
              id="product-name-input"
              label="Product Name"
              onChange={handleChange}
              defaultValue={product.productName}
              variant="standard"
            />
            <TextField
              id="scrum-master-input"
              label="Scrum Master"
              onChange={handleChange}
              defaultValue={product.scrumMasterName}
              variant="standard"
            />
            <TextField
              id="product-owner-input"
              label="Product Owner"
              onChange={handleChange}
              defaultValue={product.productOwnerName}
              variant="standard"
            />
            <Autocomplete
              multiple
              id="developers-input"
              options={[]}
              onChange={handleDevelopersChange}
              value={product.developers}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip id="tags-filled" variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField className="!mt-5"
                  {...params}
                  variant="filled"
                  disabled={product.developers.length > 4 ? true : false}
                  helperText={product.developers.length > 4 ? "Limit of 5 Developers." : ""}
                  placeholder="Add Developer name"
                  label="Developers"
                />
              )}
            />
            <LocalizationProvider id="date-picker" dateAdapter={AdapterDayjs}>

              <DatePicker className="!mt-10"
                onChange={handleDateChange}

                defaultValue={dayjs(product.startDate)}
                label="Start Date"
              />
            </LocalizationProvider>
            <TextField className="!mt-10 !ml-5"
              id="filled-select-methodology"
              select
              onChange={handleMethodChange}
              value={product.methodology}
              label="Select"
              helperText="Please select a methodology."
              variant="filled"
            >
              {methodologies.map((i, index) => (
                <MenuItem id={`filled-select`} key={index} value={i}>
                  {i}
                </MenuItem>
              ))}
            </TextField>
            <Button color="error" variant="contained" className="!mt-20 !ml-20 !mr-2"
            // when Cancel is clicked, simply close the modal.
              onClick={props.handleClose}
            >Cancel
            </Button>
            <LoadingButton color="success" variant="contained" className="!mt-20"
              onClick={handleSave}
              loading={loading}
            >Save
            </LoadingButton>
            <div className="flex !mt-1 !mr-10 flex-row-reverse">{`${error}`}</div>
          </Box>
        </Modal>
      </div>
    )
  }

}