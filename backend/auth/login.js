const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async(req, res) =>{
    const { email, password } = req.body;

    if(!email || !password ){
        return res.status(400).send({ message: 'Please provide email and password' });
    }

    try {
        
        const user = await User.findOne({ email });
        if(!user) return res.status(400).send({ message: 'User not found' });

        const passwordMatches = await bcrypt.compare(password, user.password);
        if(!passwordMatches) return res.status(401).send({ message: 'Invalid password' });

        const payload = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        const token = jwt.sign({user: payload}, '1234', {expiresIn: '20h'})
        res.status(200).send(token);

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

module.exports = {login};

