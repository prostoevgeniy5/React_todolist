import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {TextField} from '@material-ui/core';

// type AddItemFormPropsType = {
//     addItem: (title: string) => void
// }

export function AddItemForm(props)
// : AddItemFormPropsType) 
{

    let [title, setTitle] = useState("")
    let [error, setError] = useState(null); // useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e
        // : ChangeEvent<HTMLInputElement>
        ) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e
        // : KeyboardEvent<HTMLInputElement>
        ) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        {/* <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? "error" : ""}
        /> */}
        <TextField  value={title}
               variant={'outlined'}
               label={'Type value'}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               error={error} 
               helperText={error} />
        <IconButton onClick={addItem}
            variant='contained'
            color='primary'
            >
                <AddBoxIcon />
            </IconButton>

        {/* {error && <div className="error-message">{error}</div>} */}
    </div>
}
