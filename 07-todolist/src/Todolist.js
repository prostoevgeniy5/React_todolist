import React, {ChangeEvent} from 'react';
// import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button} from '@material-ui/core'
import {IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {FormControlLabel, Checkbox} from '@material-ui/core';

// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

// type PropsType = {
//     id: string
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: string, todolistId: string) => void
//     changeFilter: (value: FilterValuesType, todolistId: string) => void
//     addTask: (title: string, todolistId: string) => void
//     changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
//     removeTodolist: (id: string) => void
//     changeTodolistTitle: (id: string, newTitle: string) => void
//     filter: FilterValuesType
//     changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
// }

export function Todolist(props)
//: PropsType)
 {
    const addTask = (title
        //: string
        ) => {
        props.addTask(title, props.id);
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (title
        // : string
        ) => {
        props.changeTodolistTitle(props.id, title);
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    return <div>
        <h3> <EditableSpan value={props.title} onChange={changeTodolistTitle} />
            {/* <button onClick={removeTodolist}>x</button> */}
            <IconButton onClick={removeTodolist} aria-label="delete">
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e
                        //: ChangeEvent<HTMLInputElement>
                        ) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }
                    const onTitleChangeHandler = (newValue
                        // : string
                        ) => {
                        props.changeTaskTitle(t.id, newValue, props.id);
                    }


                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={t.isDone}
                                onChange={onChangeHandler}
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label=""
                        />
                        {/* <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/> */}
                        <EditableSpan value={t.title} onChange={onTitleChangeHandler} />
                        {/* <button onClick={onClickHandler}>x</button> */}
                        <IconButton onClick={onClickHandler} aria-label="delete">
                            <Delete />
                        </IconButton>
                    </li>
                })
            }
        </ul>
        <div>
            <Button variant={props.filter === 'all' ? "contained" : "text"}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button color='primary' variant={props.filter === 'active' ? "contained" : "text"}
                    onClick={onActiveClickHandler}>Active
            </Button>
            <Button color='secondary' variant={props.filter === 'completed' ? "contained" : "text"}
                    onClick={onCompletedClickHandler}>Completed
            </Button>
            {/* <Button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </Button> */}
        </div>
    </div>
}


