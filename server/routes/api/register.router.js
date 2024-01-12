const registerRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

registerRouter.post('/register', async (req, res) => {
    console.log (req,res)
  const { login, password, email, telephone } = req.body;
  try {
    if (login && password && email && telephone) {
      let user = await User.findOne({ where: { login } });
      let userEmail = await User.findOne({ where: { email } });
      if (!user && !userEmail) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({
          login,
          password: hash,
          email,
          telephone,
        });
        req.session.userId = user.id;
        res.locals.user = { login: user.login, id: user.id };
        res.status(201).json({
          id: user.id,
          login: user.login,
          name: user.name,
          email: user.email,
          city: user.city,
        });
      } else {
        res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});

module.exports = registerRouter;