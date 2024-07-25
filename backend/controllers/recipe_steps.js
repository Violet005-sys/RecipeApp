const { Recipe, RecipeSteps } = require('../model/recipe');

const recipeSteps = async(req, res) => {
    const { id } = req.params;

    try {
        const recipe = await Recipe.findOne({'_id': id});

        if(!recipe) res.status(404).send({error: 'recipe not found'})

        const recipeSteps = await RecipeSteps.find({'recipe': recipe._id});
        res.status(200).send(recipeSteps)
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'An error occurred while fetching recipe steps' });
    }
};

const createRecipeStep = async(req, res) => {

    const { recipe, name} = req.body;

    if(!recipe || !name) {
        return res.status(400).send({ error: 'Please provide recipe and step name' });
    }

    try {
        const recipe = await Recipe.findOne({'_id': id})
        if(!recipe) res.status(404).send({ error: 'Recipe not found'})

        const recipeStep = await RecipeSteps.create({
            recipe: recipe._id,
            name: name
        });

        if(!recipeStep) return res.status(400).send({ error: 'Recipe step could not be created' });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'An error occurred while creating the recipe step' });
    }

}

module.exports = { recipeSteps, createRecipeStep }