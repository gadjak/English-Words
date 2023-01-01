import { useState } from 'react';
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  TextField,
  Box,
  SpeedDial,
  SpeedDialAction,
  DialogTitle, DialogContentText,
  DialogContent,
  Dialog,
  DialogActions,
  Button
} from '@mui/material';

import { SelectChangeEvent } from '@mui/material/Select';
import { Store } from '../types';
import { useAppDispatch } from '../hooks';
import { setSelectedGroups, addWordGroup ,delWordGroup} from '../store/wordsSlice';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

const actions = [
  { icon: <AddIcon />, name: 'Add' },
  { icon: <DeleteIcon />, name: 'Delete' },

];

export const SelectCard: React.FC<Store> = ({ words, options }) => {
  const [isOpenedAdd, setIsOpenedAdd] = useState<boolean>(() => false);
  const [isOpenedDel, setIsOpenedDel] = useState<boolean>(() => false);
  const [groupText, setGroupText] = useState<string>(() => '');
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent<typeof options.selectedGroups>) => {

    const {
      target: { value },
    } = event;
    dispatch(setSelectedGroups(value as string[]))
  };

  const handleClose = () => {
    setIsOpenedAdd(false)
    setIsOpenedDel(false);
    setGroupText('')
  };

  const addGroup = () => {
    if (groupText != '') {
      dispatch(addWordGroup(groupText))
    }
    handleClose()
  }
  const delGroup = () => {
    dispatch(delWordGroup())
    handleClose()
  }


  return (
    <div>
      <Dialog
        open={isOpenedDel}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         <p> {"Подтвердите действие"}</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <>
              Вы удалите следующие группы:
              
              {options.selectedGroups.map((item)=>(
                <li key={item}>{item}</li>
              ))}
              
             
            </>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={delGroup} autoFocus>
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isOpenedAdd} onClose={handleClose}>
        <DialogTitle>Добавление</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы создаете новую группу и сможете добавлять в нее новые слова
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Имя добавляемой групы"
            type="en"
            fullWidth
            variant="standard"
            onChange={(e) => setGroupText(e.target.value)}
            value={groupText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={addGroup}>Добавить</Button>
        </DialogActions>
      </Dialog>

      <div className='select-box'>
        <div className='select' >
          <FormControl className='select' sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Группа</InputLabel>
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

          <Box sx={{ '& > :not(style)': { m: 1 }, marginRight: '66px' }}>

            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', fontSize: '10px' }}
              icon={<EditIcon />}
              direction='right'
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={
                    () => action.name === 'Add' ? setIsOpenedAdd(true) : setIsOpenedDel(true)
                  }
                />
              ))}
            </SpeedDial>
          </Box>
        </div>
      </div>
    </div>
  );
}
