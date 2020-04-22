import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.countNewTasks = 0;
    }
    render = () => {
        let newTasksTitileRef = React.createRef();

        const onAddNewTask = (e) => {
            let newText = newTasksTitileRef.current.value;
            newTasksTitileRef.current.value = "";
            // this.countNewTasks += 1;
            this.props.onAddTaskClick(newText, 1);

        }

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input ref = {newTasksTitileRef} type="text" placeholder="New task name"/>
                    <button onClick={onAddNewTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

