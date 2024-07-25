const { Recipe, RecipeSteps } = require('../model/recipe');

const getRecipes = async(req, res) => {
    const { title } = req.query;
    try {
        let recipes = await Recipe.find({});
        

        if(title) {
            recipes = await Recipe.find({title: new RegExp(title, 'i')});
        }

        res.status(200).send(recipes);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const createRecipe = async(req, res) => {
    const { title, ingredients } = req.body;

    if(!title || !ingredients) {
        return res.status(400).send({ error: 'All fields are required.' });
    }

    

    

    try {
        const recipe = await Recipe.create({
            title: title,
            creator: req.user.id,
            ingredients: ingredients
        })

        if(!recipe) return res.status(400).send({ error: 'Recipe could not be created.' });
        res.status(201).send(recipe);
       res.send({ data: req.body }).status(201)
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ error: error.message });
    }
    

};

const getRecipeById = async(req, res) => {
    const { id } = req.params;

    try {
        const recipe = await Recipe.findById({'_id': id});
        if(!recipe ) return res.status(404).send({ error: 'Recipe not found' });

        res.status(200).send(recipe);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ error: error.message });
    }
};

const updateRecipe = async(req, res) => {
    const { id } = req.params;
    const { title, ingredients } = req.body;

    if(!title ||!ingredients) {
        return res.status(400).send({ error: 'Please provide title and ingredients' });
    }

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, { title, ingredients }, { new: true });
        if(!updatedRecipe) return res.status(404).send({ error: 'Recipe not found' });

        res.status(200).send(updatedRecipe);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ error: error.message });
    }
    
    
}

const deleteRecipe = async(req, res) => {
    const { id } = req.params;

    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if(!deletedRecipe) return res.status(404).send({ error: 'Recipe not found' });

        res.status(200).send({'success': `${deletedRecipe} has been deleted`});

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ error: error.message });
    }
}

module.exports = {getRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe };