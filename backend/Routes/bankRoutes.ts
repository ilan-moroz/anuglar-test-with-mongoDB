import express, { Request, Response, NextFunction } from "express";
import { BankAccount } from "../Models/Bank";

const bankRouter = express.Router();
bankRouter.post(
  "/operation",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let account = await BankAccount.findOne({
        accountNumber: req.body.accountNumber,
      });
      // If account doesn't exist, create a new one
      if (!account) {
        account = new BankAccount({
          accountNumber: req.body.accountNumber,
          operations: [],
        });
      }
      account.operations.push(req.body.operation);
      await account.save();
      res.status(200).json(account);
    } catch (error) {
      next(error);
    }
  }
);

bankRouter.get(
  "/operations/:accountNumber",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const account = await BankAccount.findOne({
        accountNumber: req.params.accountNumber,
      });
      if (!account) {
        return res.status(404).json({ message: "Bank account not found." });
      }
      res
        .status(200)
        .json({
          accountNumber: account.accountNumber,
          operations: account.operations,
        });
    } catch (error) {
      next(error);
    }
  }
);

export default bankRouter;
