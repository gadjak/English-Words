import { useState, useEffect } from "react";
import { Word, Store } from "../types";
import '../CSS/App.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useAppDispatch } from "../hooks";
import { delWord, editWord } from "../store/wordsSlice";

interface CardProps {
    word: Word,
}
export const Card: React.FC<CardProps> = ({ word }) => {
    const [isOpenedDel, setIsOpenedDel] = useState<boolean>(() => false);
    const [isEditWord, setIsEditWord] = useState<boolean>(() => false);
    const [enText, setEnText] = useState<string>(() => word.en);
    const [rusText, setRusText] = useState<string>(() => word.rus);

    const dispatch = useAppDispatch();

    const deleteCard = () => {
        dispatch(delWord(word))
        setIsOpenedDel(false)
    }
    const editCard = () => {
        if (enText !== '' && enText !== word.en || rusText !== '' && rusText !== word.rus) {
            const newWord: Word = {
                en: enText,
                rus: rusText,
                key: word.key,
                group: word.group
            }
            dispatch(editWord(newWord))
        }

    }
    useEffect(() => {
        // console.log('rerender Card')
    }, [])
    return (
        <div className='single-card' >
            <Dialog
                open={isOpenedDel}
                onClose={() => setIsOpenedDel(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <p> {"Подтвердите действие"}</p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className="confirm-del-word" id="alert-dialog-description">
                        <>
                            <p> Вы удалите следующее слово:</p>
                            <li>    En : {enText}</li>
                            <li>    Rus : {rusText}</li>
                        </>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpenedDel(false)}>Отмена</Button>
                    <Button onClick={deleteCard} autoFocus>
                        Подтвердить
                    </Button>
                </DialogActions>
            </Dialog>
            <div className="card-text">
                <TextField
                    sx={
                        !isEditWord ? {
                            "& fieldset": { border: 'none' },
                        } : {}
                    }
                    id="standard-read-only-input"
                    label="En"
                    value={enText}
                    onChange={(e) => setEnText(e.target.value)}
                    InputProps={{
                        readOnly: !isEditWord,
                    }}
                    className="text-field"
                />
                <TextField
                    sx={
                        !isEditWord ? {
                            "& fieldset": { border: 'none' },
                        } : {}
                    }
                    id="standard-read-only-input"
                    label="Rus"
                    value={rusText}
                    onChange={(e) => setRusText(e.target.value)}
                    InputProps={{
                        readOnly: !isEditWord,
                    }}

                    className="text-field"
                />
            </div>



            <div className="acts-card">
                <Fab onClick={() => isEditWord ? (setIsEditWord(false), editCard()) : setIsEditWord(true)} color="primary" size="medium" aria-label="edit">
                    {isEditWord ? <CheckIcon /> : <EditIcon />}
                </Fab>
                <Fab color="primary" size="medium" onClick={() => { setIsOpenedDel(true) }} aria-label="delete">
                    <DeleteIcon />
                </Fab>
            </div>

        </div>
    )
}