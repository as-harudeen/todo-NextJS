import { Request, Response } from "express";
import { CreateTodo } from "../../application/use-cases/createTodo";


export class CreateTodoController {
  public constructor(private _useCase: CreateTodo) {
  }

  public async handle(req: Request, res: Response) {
    const { text } = req.body;
    console.log(text);
    const result = await this._useCase.execute(text);

    if(result instanceof Error) {
        res.status(400);
        throw new Error("Please provide valid text");
    }
    
    res.status(201).send(result);
  }
}
