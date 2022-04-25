import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const Searchbox = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={[]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
};

export default Searchbox;
