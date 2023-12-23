import { Todo } from "../entities/TodoEntity";

export interface ITodoRepository {
    save: (todo: Todo) => Promise<Todo>;
    find: () => Promise<Todo[]>;
    findById: (id: string) => Promise<Todo | null>; 
}