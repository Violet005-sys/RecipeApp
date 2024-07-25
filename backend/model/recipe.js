const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
     title: {
        type: String,
        required: true,
    },
    image: {
        type: String
       
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    ingredients: {
        type: Array,
        required: true
    }
});

const RecipeStepsSchema = new mongoose.Schema({
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true
    },
    name: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = {
    Recipe: mongoose.model('Recipe', RecipeSchema),
    RecipeSteps: mongoose.model('RecipeSteps', RecipeStepsSchema)
};

