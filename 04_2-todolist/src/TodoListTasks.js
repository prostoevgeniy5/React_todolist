import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

        let tasksElements = this.props.tasks.filter((t)=>{
                                                if(this.props.filterValue === 'All') {
                                                    return true;
                                                }else if(this.props.filterValue === 'Active') {
                                                    return !t.isDone;
                                                }else if(this.props.filterValue === 'Completed') {
                                                    return t.isDone;
                                                }
                                            }).map( task => <TodoListTask title={task.title}
                                                    isDone={task.isDone}
                                                    priority={task.priority}
                                                    changeStatus={this.props.changeStatus}
                                                    task={task} />);

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

