    

import {TodoStore as TodoStoreOriginal, Todo} from '../TodoStore';

export class TodoStore implements TodoStoreOriginal {
    todos: Todo[] = [];

    addTodo(label: string): void {
    }
}
