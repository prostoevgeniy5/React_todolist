import React from 'react';
import TodoListTask from './TodoListTask'

class TodoListTasks extends React.Component {
	render = () => {
        const elementsList = this.props.tasksList.map((item) => {
            return (
                    <TodoListTask title={item.title} isDone={item.isDone}  />
                )
        })
        
		return (
			<div className="todoList-tasks">

                {elementsList}

                {/*<TodoListTask title={'React Native'} isDone={false} />

                <div className="todoList-task">
                    <input type="checkbox" checked={true}/>
                    <span>CSS</span>
                </div>
                <div className="todoList-task">
                    <input type="checkbox" checked={false}/>
                    <span>JS</span>
                </div>
                <div className="todoList-task">
                    <input type="checkbox" checked={false}/>
                    <span>ReactJS</span>
                </div>
                <div className="todoList-task">
                    <input type="checkbox" checked={true}/>
                    <span>Patterns</span>
                </div> */}
			</div>
			);
	}
}

export default TodoListTasks;
