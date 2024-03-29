const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");
const secret ="abhi";
const jwt=require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  await User.create({
    username: username,
    password: password,
  });
  // for error try catch
  res.json({
    msg: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  console.log(secret);

  const user = await User.find({
      username,
      password
  })
  if (user) {
      const token = jwt.sign({
          username
      }, secret);

      res.json({
          token
      });
  } else {
      res.status(411).json({
          message: "Incorrect email and pass"
      })
  }
 
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
