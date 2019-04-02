    
import * as React from 'react';
import {TodoStore} from '../common/TodoStore';
import './TodoList.css';
import {inject, observer} from 'mobx-react';

@inject('todoStore')
@observer
export class TodoList extends React.Component<{todoStore?: TodoStore}, {}> {
    render() {
        const list = this.todoStore.todos.map(todo => (
            <li key={todo.id} className={todo.done ? 'TodoList--Item--Done' : ''}>
                <input type="checkbox" onClick={() => todo.done = !todo.done} checked={todo.done} />
                {todo.label}
            </li>
        ));
        return (
            <ul className="TodoList">{list}</ul>
        );
    }

    private get todoStore(): TodoStore {
        return this.props.todoStore as TodoStore;
    }
}
