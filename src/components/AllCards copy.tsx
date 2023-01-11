import { useState, useEffect } from "react";
import { Word, Store } from "../types";
import '../CSS/App.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAppDispatch } from "../hooks";
import { delWord } from "../store/wordsSlice";
//let words:Word[] = []

export const AllCards: React.FC<Store> = ({ words, options }) => {
    const [word, setWord] = useState<Word>({ en: '', rus: '', group: '', key: '' })
    const [isOpenedDel, setIsOpenedDel] = useState<boolean>(() => false);
    const [isEditWord, setIsEditWord] = useState<boolean>(() => false);
    const dispatch = useAppDispatch();
    useEffect(() => {


    }, [words])
    const deleteCard = () => {
        dispatch(delWord(word))
        setIsOpenedDel(false)
    }

    const Cards = () => {

        let selectedWords = options.selectedGroups.reduce<Word[]>((acc, name) => {
            acc.push(...words[name])
            return acc;
        }, [])

        return (
            <>
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
                                <li>    En : {word.en}</li>
                                <li>    Rus : {word.rus}</li>
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
                {selectedWords.map((word) =>

                    <div key={word.en} className='single-card' >
                        <div className="card-text">
                            <TextField
                                sx={
                                    !isEditWord ? {
                                        "& fieldset": { border: 'none' },
                                    } : {}
                                }
                                id="standard-read-only-input"
                                label="En"
                                defaultValue={word.en}
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
                                defaultValue={word.rus}
                                InputProps={{
                                    readOnly: !isEditWord,
                                }}

                                className="text-field"
                            />
                        </div>
                        {/*isEditWord ?
                           
                                <TextField />En: {word.en}
                                <TextField />Rus: {word.rus}
                            </div> 
                            :
                            <div className="card-text">
                                <span>En: {word.en}</span>
                                <span>Rus: {word.rus}</span>
                </div>*/}


                        <div className="acts-card">
                            <Fab color="primary" size="medium" aria-label="edit">
                                <EditIcon onClick={() => setIsEditWord(true)} />
                            </Fab>
                            <Fab color="primary" size="medium" onClick={() => { setWord(word); setIsOpenedDel(true) }} aria-label="delete">
                                <DeleteIcon />
                            </Fab>
                        </div>

                    </div>

                )}
            </>
        )

    }


    return (

        <div className='all-cards' >
            <Cards />
        </div>

    )
}