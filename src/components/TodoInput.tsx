import * as React from 'react';
import {TodoStore} from '../common/TodoStore';
import {inject, observer} from 'mobx-react';

@inject('todoStore')
@observer
export class TodoInput extends React.Component<{ todoStore?: TodoStore }, {}> {
    private textInput: HTMLInputElement;

    render() {
        return (
            <div>
                <input type="text" name="todoInput"
                       ref={(input) => {this.textInput = input as HTMLInputElement;}}/>
                <button onClick={this.addTodo}>Add</button>
            </div>
        );
    }

    addTodo = () => {
        const label = this.textInput.value;
        this.todoStore().addTodo(label);
        this.textInput.value = '';
    }

    private todoStore(): TodoStore {
        return this.props.todoStore as TodoStore;
    }
}
