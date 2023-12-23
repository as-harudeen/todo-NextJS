import mongoose from "mongoose";

interface ITodo {
  text: string;
  status: "pending" | "done";
}

const TodoSchema = new mongoose.Schema<ITodo>(
  {
    text: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "done"],
      required: true,
    },
  },
  {
    toJSON: {
      transform: (_doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const TodoModal = mongoose.model<ITodo>("Todo", TodoSchema);

export default TodoModal;
