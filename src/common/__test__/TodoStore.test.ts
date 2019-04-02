import * as assert from 'assert';
import { TodoStore } from '../TodoStore';

describe('TodoStore', () => {
    describe('addTodo()', () => {
        it('should add Todo', () => {
            const todoStore = new TodoStore();
            todoStore.addTodo('hello');
            assert.equal(todoStore.todos.length, 1);
        });
    });
});
