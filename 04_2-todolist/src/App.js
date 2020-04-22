import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {title: "JS", isDone: false, priority: "medium"},
                {title: "HTML", isDone: true, priority: "low"},
                {title: "CSS", isDone: true, priority: "low"},
                {title: "ReactJS", isDone: false, priority: "high"}
            ],
            filterValue: "All"
        }    
    }

    changeFilter = (newFilterValue) => {
        this.setState({filterValue : newFilterValue})
    }

    onAddTaskClick = (newText, count) => {

        let newTask = {
            title: newText,
            isDone: false,
            priority: "low"
        };
        let newTasks = [...this.state.tasks, newTask];
        let countT = this.state.countTasks + count;
        this.setState( {
            tasks: newTasks, countTasks: countT
        });
    }

    changeStatus = (task, data) => {
        const ar = this.state.tasks.map(t => {
             
            if(task != t) {
                return t;
            } else {
                return {...t, isDone : data};
            }
        });
        this.setState({tasks : ar});
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader className="todoList-header" 
                                    onAddTaskClick={this.onAddTaskClick} />
                    <TodoListTasks tasks={this.state.tasks} 
                                    filterValue={this.state.filterValue}
                                    changeStatus={this.changeStatus}
                                    />
                    <TodoListFooter filterValue={this.state.filterValue}
                                    changeFilter={this.changeFilter} />
                </div>
            </div>
        );
    }
}

export default App;

