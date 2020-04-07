import React from 'react';

class TodoListTask extends React.Component {
    constructor(attributes){
    super(attributes)
    }
	render = () => {
		return (			
                <div className="todoList-task">
                    <input type="checkbox" checked={this.props.isDone}/>
                    <span>{this.props.title} : {this.props.priority}</span>
                </div>
			);
	}
}

export default TodoListTask;