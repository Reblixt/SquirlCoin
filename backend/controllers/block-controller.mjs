export const createBlock = (req, res, next) => {
  res.status(201).json({ message: "Block created" });
};
