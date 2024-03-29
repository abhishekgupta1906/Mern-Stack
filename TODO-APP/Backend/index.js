const express = require("express");
const { createtodo, updatetodo } = require("./type.js");
const { todo } = require("./db.js");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
// title string
// descritption string

app.post("/todo", async (req, res) => {
  const createpayload = req.body;
  const parsedpayload = createtodo.safeParse(createpayload);
  if (!parsedpayload.success) {
    res.status(411).json({ message: "wrogn inputs" });
    // return ;
  }
  // put this in mongodb
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });
  res.json({
    msg: "todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const createpayload = req.body;
  const parsedpayload = updatetodo.safeParse(createpayload);
  if (!parsedpayload.success) {
    res.status(411).json({ message: "wrogn inputs" });
    // return ;
  }
  await todo.updateOne({ _id: req.body.id }, { completed: true });
  res.json({
    msg: "todo marked as completed",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
