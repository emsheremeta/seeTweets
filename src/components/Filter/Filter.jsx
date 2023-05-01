import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Wrapper } from './Filter.styled';

export const Filter = ({ handleChange }) => {
  return (
    <Wrapper>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select onChange={handleChange} defaultValue="Show all">
          <MenuItem value="Show all"> Show all</MenuItem>
          <MenuItem value="Follow">Follow</MenuItem>
          <MenuItem value="Following">Following</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
};
