import { TodoStore } from './todo-store';

describe('TodoStore', function () {
    const store = new TodoStore();

    beforeEach(function () {
        store.clear();
    });

    describe('#addTodo()', function () {

        it('should be able to add a new todo', function () {
            store.addTodo('My new Todo task');

            const addedTodo = store.todos[0];

            expect(addedTodo).toBeDefined();
            expect(addedTodo.id).toBeDefined();
            expect(addedTodo.timeStamp).toBeDefined();
            expect(addedTodo.done).toBeDefined();
            expect(addedTodo.done).toBe(false);
        });

        it('should return the newly added task', function () {
            store.addTodo('My super task');
            expect(store.todos.length).toBe(1);
        });

    });

    describe('#setDone()', function () {

        it('should sort todos by status', function () {
            store.addTodo('todo1');
            store.addTodo('todo2');
            store.addTodo('todo3');

            store.setDone(1);

            expect(store.todos[0].description).toBe('todo1');
            expect(store.todos[1].description).toBe('todo3');
            expect(store.todos[2].description).toBe('todo2');

            expect(store.todos[0].done).toBe(false);
            expect(store.todos[1].done).toBe(false);
            expect(store.todos[2].done).toBe(true);
        });

    });
});
