import React from 'react';
import TodoListHeader from './TodoListHeader.js';
import TodoListTasks from './TodoListTasks.js';
import TodoListFooter from './TodoListFooter.js';
import './App.css';

class App extends React.Component {
    tasks = [
        {title: "CSS" , isDone: true, priority: 'low' },
        {title: "HTML" , isDone: true, priority: 'medium' },
        {title: "JavaScript" , isDone: false, priority: 'high' },
        {title: "React" , isDone: false, priority: 'high' },
        {title: "Initial Git" , isDone: true, priority: 'low' },
        {title: "Redux" , isDone: false, priority: 'high' }
    ]

    filterValue = 'all';

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasksList={this.tasks} />
                    <TodoListFooter filtervalue={this.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;


