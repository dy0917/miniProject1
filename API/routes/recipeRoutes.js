const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/", recipeController.getAllRecipes);
router.get("/:id", (req, res) => {
  const { id } = req.query;
  const recipe = recipeController.getRecipeById(id);
  // receive recipe (by specific id)
  if (recipe) {
    res.status(200).json(recipe);
    // If a resource does exist return a 404 (Not found) status code
  } else {
    res.status(404).json({ message: "Recipe not found" });
  }
});
router.post("/", recipeController.createRecipe);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;

//using controller functions
