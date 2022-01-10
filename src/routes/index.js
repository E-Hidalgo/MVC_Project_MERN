import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is home");
});

router.get("/about", (req, res) => {
  res.send("This is about");
});

export default router;