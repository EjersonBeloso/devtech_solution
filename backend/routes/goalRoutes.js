const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,

  deleteGoal,
  updatedGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router
  .route("/:id")
  .delete(protect, deleteGoal)
  .get(protect, updateGoal)
  .put(protect, updatedGoal);

module.exports = router;
