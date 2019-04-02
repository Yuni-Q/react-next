import * as React from 'react';
import {TodoList} from '../TodoList';
import {TodoStore} from '../../common/TodoStore';
import {configure,mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// jest.mock('../../stores/TodoStore');

describe('TodoList', () => {
    it('should contain added todo item', () => {
        // Given
        const todoStore = new TodoStore();
        const component = mount(<TodoList todoStore={todoStore}/>);

        // When
        todoStore.addTodo('hello');

        // Then
        expect(component.find('ul')).toMatchSnapshot();
    });
});
