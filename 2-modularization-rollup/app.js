/**
 * TodoStore handles and stores all todos
 */
class TodoStore {

    constructor() {
        this.idCounter = 0;
        this._todos = [];
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
        this.notify();
    }

    notify() {
        this.subscribers.forEach(subscriber => {
            subscriber.call(subscriber, this.todos);
        });
    }

    getAndIncrementIdCounter() {
        return this.idCounter++;
    }

    addTodo(description) {
        const todoObject = {
            timeStamp: new Date(),
            description: description,
            id: this.getAndIncrementIdCounter(),
            done: false
        };
        this._todos.push(todoObject);
        this.notify();
    }

    setDone(id) {
        const matchingTodos = this._todos.filter(function(todo){
            return todo.id === id;
        });

        if (matchingTodos.length === 1) {
            matchingTodos[0].done = true;
        } else {
            throw new Error(`No Todo item with id ${id} found!`);
        }

        this.notify();
    }

    get todos() {
        return this._todos;
    }

    clear() {
        this.idCounter = 0;
        this._todos = [];
        this.notify();
    }
}

const todoElement = todo => `
    <li class="list-group-item ${todo.done ? 'done' : ''}">
        ${todo.description}
        <button class="btn btn-xs pull-right" onclick="todo.onSetDone(${todo.id})">Done</button>
    </li>
`;

/**
 * TodoComponent renders todos and handles events
 */
class TodoAppComponent {
    constructor(container) {
        this.container = container;
        this.todoStore = new TodoStore();
        this.todoStore.subscribe(todos => this.render(todos));
    }
    
    onKeyUp(event) {
        const isEnterKey = event.keyCode === 13;

        if (isEnterKey) {
            this.onAdd();
        }
    }

    onAdd() {
        const description = document.querySelector('#new-todo-description').value;
        if (description) {
            this.todoStore.addTodo(description);
        }
    }

    onSetDone(todoId) {
        this.todoStore.setDone(todoId);
    }

    onClear() {
        this.todoStore.clear();
    }

    render(todos) {
        this.container.innerHTML = `
            <h1>JS Enterprise ToDo</h1>

            <div id="add-todo-panel" class="input-group">
                <input id="new-todo-description"
                    type="text"
                    class="form-control"
                    onkeyup="todo.onKeyUp(event);"
                    placeholder="Add new todo...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button" onclick="todo.onAdd();">Add</button>
                </span>
            </div>

            <ul id="todo-list-panel" class="list-group">
                ${todos.map(todo => todoElement(todo)).join('')}
            </ul>
            
            <div class="menu">
                <button class="btn btn-danger" onclick="todo.onClear()">Clear</button>
            </div>
        `;
    }
}

 window.todo = new TodoAppComponent(document.querySelector('#todo-app'));