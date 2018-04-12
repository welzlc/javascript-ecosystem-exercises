import TodoAppComponent from './todo-app-component';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * TodoComponent renders todos and handles events
 */
 window.todo = new TodoAppComponent(document.querySelector('#todo-app'));