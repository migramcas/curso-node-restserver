const { Router } = require("express");

const {
  getUser,
  patchUser,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/users");

const router = Router();

router.get("/", getUser);

router.put("/:id", updateUser); //se ponen como "/" porqwue se configuró en Server el path

router.patch("/:id", patchUser);

router.post("/", createUser);

router.delete("/:id", deleteUser);

module.exports = router;
