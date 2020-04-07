import React from 'react';


class TodoListFooter extends React.Component {
	render = () => {
		let filterforall = this.props.filtervalue === 'all' ? 'filter_active' : ''
		let filterforcompleted = this.props.filtervalue === 'completed' ? 'filter_active' : ''
		let filterforactive = this.props.filtervalue === 'active' ? 'filter_active' : ''
		return (
			<div className="todoList-footer" >		 
                <button className={filterforall}>All</button>
                <button className={filterforcompleted}>Completed</button>
                <button className={filterforactive}>Active</button>
			</div>
			);
	}
}

export default TodoListFooter;