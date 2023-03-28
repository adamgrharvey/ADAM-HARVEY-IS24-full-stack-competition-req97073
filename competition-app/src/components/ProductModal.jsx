import { Button, TextField, Modal, Typography, Box, MenuItem, Autocomplete, Chip } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import axios from "axios";

const backendURL = 'http://localhost:3000'

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

const methodologies = ['Agile', 'Waterfall'];



export default function ProductModal(props) {

  const product = props.modalData;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event, child) => {

    if (event.target.id === "product-name-input") {
      props.setModalData((prev) => ({ ...prev, productName: event.target.value }))
    } else if (event.target.id === "scrum-master-input") {
      props.setModalData((prev) => ({ ...prev, scrumMasterName: event.target.value }))
    } else if (event.target.id === "product-owner-input") {
      props.setModalData((prev) => ({ ...prev, productOwnerName: event.target.value }))
    }

    console.log(event);
    //console.log(child);

    //setProduct(e.target.value)
  }

  useEffect(() => {
    setError("");
  }, [props.modalData])

  const handleDevelopersChange = (event, child) => {
    if (child.length <= 5) {
      props.setModalData((prev) => ({ ...prev, developers: child }))
    }

  }

  const handleMethodChange = (event, child) => {
    props.setModalData((prev) => ({ ...prev, methodology: child.props.value }))
  }

  const handleDateChange = (event, child) => {
    props.setModalData((prev) => ({ ...prev, startDate: `${event.$y}-${event.$M + 1}-${event.$D}` }))
  }

  const handleSave = function () {
    setLoading(true);
    sendEditRequest().then((results) => {
      console.log(results);
      props.setRefreshData(true);
      setLoading(false);
      props.handleClose();
    }).catch((error) => {
      setLoading(false);
      if (error.response) {
        setError(error.response.data);
      } else {
        setError(error.message);
      }
      
    })
  }

  const sendEditRequest = function () {
    return new Promise((resolve, reject) => {
      axios
        .put(`${backendURL}/api/products/${product.productId}`, product, {
          headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          },
        })
        .then((res) => {
          // if server returns 201 (success)
          if (res.status === 201) {
            console.log(res);
            resolve(res);
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    })
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
            <Typography variant="h5" component="h2">
              {`Edit Product ${product.productId}`}
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