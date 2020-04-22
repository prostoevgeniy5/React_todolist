import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    render = () => {

    	const onIsDoneChanged = (e) => {
    		let task = this.props.task;
    		let data = e.currentTarget.checked;
    		this.props.changeStatus(task, data);
    	}

        return (
                <div className="todoList-task">
                    <input onChange={onIsDoneChanged} type="checkbox" checked={this.props.isDone}/>
                    <span>{this.props.title}</span>,
                    <span>priority: {this.props.priority}</span>,
                    <span> count of task : {this.props.countTasks}</span> 
                </div>
        );
    }
}

export default TodoListTask;

