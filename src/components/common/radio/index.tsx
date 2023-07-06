import * as React from "react";
import Radio from "@mui/material/Radio";
import { lightGreen } from "@mui/material/colors";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const index = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="female"
          control={
            <Radio
              sx={{
                color: lightGreen.A200,
                "&.Mui-checked": {
                  color: lightGreen.A200,
                },
              }}
            />
          }
          label={
            <div className="flex flex-col">
              <h1 className="text-md text-gray-500 font-lucide">Pickup now</h1>
              <p className="text-xs text-gray-500 font-lucide">Fast Arrival</p>
            </div>
          }
        />

        <FormControlLabel
          value="male"
          control={
            <Radio
              sx={{
                color: lightGreen.A200,
                "&.Mui-checked": {
                  color: lightGreen.A200,
                },
              }}
            />
          }
          label={
            <div className="flex flex-col">
              <h1 className="text-md text-gray-500 font-lucide ">Pickup in 15mins</h1>
              <p className="text-xs text-gray-500 font-lucide">Saves money</p>
            </div>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

export default index;
