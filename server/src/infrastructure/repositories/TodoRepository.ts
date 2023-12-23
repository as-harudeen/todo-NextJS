import { Todo } from "../../domain/entities/TodoEntity";
import { ITodoRepository } from "../../domain/repositories/ITodoRepository";
import TodoModal from "../database/models/Todo.Modal";

export class TodoRepository implements ITodoRepository {

  async save (todo: Todo) {
    const mongooseTodo = await TodoModal.create({text: todo.text, status: todo.status});
    return new Todo(mongooseTodo.text, mongooseTodo.status, mongooseTodo.id);
  }

  async find(): Promise<Todo[]> {
    const todos = await TodoModal.find();
    return todos.map((todo) => new Todo(todo.text, todo.status, todo.id));
  }

  async findById(id: string): Promise<Todo | null> {
    const todo = await TodoModal.findById({ _id: id });
    return todo ?  new Todo(todo.text, todo.status, todo.id): null;
  }
}
