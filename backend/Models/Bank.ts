import { Document, model, Schema } from "mongoose";

export interface Operation extends Document {
  type: "deposit" | "withdraw" | "loan";
  amount: number;
  payments?: number;
  interest?: number;
  date: Date;
}

export interface BankAccount extends Document {
  accountNumber: number;
  operations: Operation[];
}

const OperationSchema = new Schema<Operation>({
  type: {
    type: String,
    enum: ["deposit", "withdraw", "loan"],
    required: true,
  },
  amount: { type: Number, required: true },
  payments: Number,
  interest: Number,
  date: { type: Date, default: Date.now },
});

const BankAccountSchema = new Schema<BankAccount>({
  accountNumber: { type: Number, required: true },
  operations: [OperationSchema],
});

export const BankAccount = model<BankAccount>(
  "AccountsOperation",
  BankAccountSchema,
  "AccountsOperation"
);
