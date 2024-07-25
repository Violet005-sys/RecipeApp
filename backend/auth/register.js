const User = require("../model/user");
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .send({ error: "Please provide all the required fields" });
  }

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send({ error: `User already exists` });

    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({name:name, email: email, password: hashedPassword});

    if(!newUser) return res.status(400).send({error: `user could not be created`});
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {register}
