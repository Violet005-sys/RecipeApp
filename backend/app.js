const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//connecting the database
const { connect_db} = require('./db/connect');
connect_db();

//Authentication middleware
const { verifyUser } = require('./middleware/verifyToken');

//base route
app.get('/api/v1', (req, res) => {
    res.send({
        'message': 'Welcome to base '
    })
})

//import Routes
 const authRoutes = require('./routes/auth');
 const recipeRoutes = require('./routes/recipes');
const personalRecipes = require('./routes/personal_recipes');


 app.use('/api/v1/auth', authRoutes);
 app.use('/api/v1/recipes', recipeRoutes);
 app.use('/api/v1/personal_recipes', verifyUser, personalRecipes);



//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
