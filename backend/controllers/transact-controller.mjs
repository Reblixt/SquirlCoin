export const createTransaction = (req, res, next) => {
  res.status(201).json({ message: "Transaction created" });
};
