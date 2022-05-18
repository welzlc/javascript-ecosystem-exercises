import { TodoStore } from "./todo-store";

describe("TodoStore", function () {
  const store = new TodoStore();

  beforeEach(function () {
    store.clear();
  });

  describe("#addTodo()", function () {
    it("should be able to add a new todo", function () {
      store.addTodo("My new Todo task");

      const addedTodo = store.todos[0];

      expect(addedTodo).toBeDefined();
      expect(addedTodo.id).toBeDefined();
      expect(addedTodo.timeStamp).toBeDefined();
      expect(addedTodo.done).toBeDefined();
      expect(addedTodo.done).toBe(false);
    });

    it("should return the newly added task", function () {
      store.addTodo("My super task");
      expect(store.todos.length).toBe(1);
    });
  });

  describe("#setDone()", function () {
    it("should sort todos by status", function () {
      // Add 3 todos
      ["1", "2", "3"].forEach((element) => {
        store.addTodo(element);
      });
      // Set the second one to done
      store.setDone(2);
      // Verify that the second one is last in the list
      const todos = store.todos;
      expect(todos[0].description).toBe("1");
      expect(todos[1].description).toBe("2");
      expect(todos[2].description).toBe("3");
      // Verify that the last one is done
      expect(todos[0].done).toBe(false);
      expect(todos[1].done).toBe(false);
      expect(todos[2].done).toBe(true);
    });
  });
});
