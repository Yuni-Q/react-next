import {action, observable} from 'mobx';

export class TodoStore {
    @observable
    todos: Todo[] = [];

    @action
    addTodo(label: string) {
        this.todos.push(new Todo(label));
    }

    // @action
    // markAsDone(id: string) {
    //     const todo = this.todos.find(item => item.id === id) as Todo;
    //     todo.done = true;
    //     console.log(this.todos);
    // }
}

let counter = 1;
export class Todo {
    public id: string;
    @observable
    public label: string;
    @observable
    public done = false;

    constructor(label: string) {
        this.id = 'id-' + counter++;
        this.label = label;
    }
}
