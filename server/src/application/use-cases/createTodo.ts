import { Todo } from "../../domain/entities/TodoEntity";
import { ITodoRepository } from "../../domain/repositories/ITodoRepository";
import { IUseCase } from "../../shared/IUsecase";
import { validateText } from "../../utils/validateText";

export class CreateTodo implements IUseCase<string, Todo> {
    constructor (public todoRepo: ITodoRepository) {}
    async execute (text: string) {
        const validText = validateText(text);
        const todo = new Todo(validText);
        const saveResult = await this.todoRepo.save(todo);
        return saveResult;
    }
}