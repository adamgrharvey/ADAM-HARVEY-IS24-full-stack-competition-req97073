import { TextField, MenuItem } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export default function SearchBar(props) {

  let searchOptions = ["Developer", "Scrum Master"];

  return (
    <div className="h-200px mt-4">
      <TextField
        id="outlined-select-search"
        select
        label="Search"
        defaultValue={searchOptions[0]}
        onChange={(event, child) => props.setSearchType(child.props.value)}
        helperText="What would you like to search for?"
        variant="filled"
      >
        {searchOptions.map((option, i) => (
          <MenuItem key={`searchKey-${i}`} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        id="filled-search"
        type="search"
        variant="filled"
      />
      <LoadingButton variant="contained" className="!mt-3 !ml-3"
        onClick={() => props.setRefreshData(true)}
      >Search
      </LoadingButton>
    </div>
  )
}