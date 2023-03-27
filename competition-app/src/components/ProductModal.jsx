import { Button, TextField, Modal, Typography, Box, MenuItem, Autocomplete, Chip } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

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
            {`Edit Product ${props.modalData.id}`}
          </Typography>
          <TextField
            id="product-name-input"
            label="Product Name"
            defaultValue={props.modalData.productName}
            variant="standard"
          />
          <TextField
            id="scrum-master-input"
            label="Scrum Master"
            defaultValue={props.modalData.scrumMasterName}
            variant="standard"
          />
          <TextField
            id="product-owner-input"
            label="Product Owner"
            defaultValue={props.modalData.productOwnerName}
            variant="standard"
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={[]}
            defaultValue={props.modalData.developers}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Developers"
              />
            )}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs(props.modalData.startDate)}/>
          </LocalizationProvider>
          <TextField
            id="filled-select-methodology"
            select
            label="Select"
            helperText="Please select a methodology."
            variant="filled"
          >
            {methodologies.map((i, index) => (
              <MenuItem key={index} value={i}>
                {i}
              </MenuItem>
            ))}
          </TextField>

        </Box>
      </Modal>
    </div>
  )

}