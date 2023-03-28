import { Button, TextField, Modal, Typography, Box, MenuItem, Autocomplete, Chip } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useEffect, useState } from "react";

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

  const handleChange = (event, child) => {

    if (event.target.id === "product-name-input") {
      props.setModalData((prev) => ({...prev, productName: event.target.value}))
    } else if (event.target.id === "scrum-master-input") {
      props.setModalData((prev) => ({...prev, scrumMasterName: event.target.value}))
    } else if (event.target.id === "product-owner-input") {
      props.setModalData((prev) => ({...prev, productOwnerName: event.target.value}))
    }

    console.log(event);
    //console.log(child);
    
    //setProduct(e.target.value)
  }

  const handleDevelopersChange = (event, child) => {
    props.setModalData((prev) => ({...prev, developers: child}))
  }

  const handleMethodChange = (event, child) => {
    props.setModalData((prev) => ({...prev, methodology: child.props.value}))
  }

  const handleDateChange = (event, child) => {
    props.setModalData((prev) => ({...prev, startDate: `${event.$y}-${event.$M+1}-${event.$D}`}))
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
              {`Edit Product ${product.id}`}
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
                  <Chip  id="tags-filled" variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField className="!mt-5"
                  {...params}
                  variant="filled"
                  placeholder="Add Developer name here"
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

          </Box>
        </Modal>
      </div>
    )
  }

}