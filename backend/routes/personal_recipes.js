const express = require('express');
const {
    createRecipe,
    updateRecipe,
    deleteRecipe
} = require('../controllers/recipes');
const router = express.Router();

router.post('/', createRecipe);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;