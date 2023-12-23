import { randomUUID } from "crypto";

export class Todo  {
    constructor(
        public text: string,
        public status: "pending" | "done" = "pending",
        public  id: string = randomUUID()
    ) {}
}
