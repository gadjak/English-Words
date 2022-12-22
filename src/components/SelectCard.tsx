import {useState}  from 'react';
import {OutlinedInput,InputLabel,MenuItem,FormControl,ListItemText,Select,Checkbox} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { CardProps } from '../types';
import { useAppDispatch } from '../hooks';
import { setSelectedGroups } from '../store/optionsSlice';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export const SelectCard : React.FC<CardProps> = ({words , options}) => {
  const dispatch = useAppDispatch();
  
  const handleChange = (event: SelectChangeEvent<typeof options.selectedGroups>) => {
  
    const {
      target: { value },
    } = event;
    dispatch(setSelectedGroups(value as string[]))
  };

  return (
    <div>
      <FormControl className='select' sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Група</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={options.selectedGroups}
          onChange={handleChange}
          input={<OutlinedInput label="Група" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {Object.keys(words).map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={options.selectedGroups.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
