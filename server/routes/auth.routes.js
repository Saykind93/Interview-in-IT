const router = require('express').Router();
const { User } = require('../db/models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
require('dotenv').config();
const authMiddleware = require('../middleware/auth.middleware')

//для авторизации jwt
router.post('/login', async (req, res) => {
  try {

    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) {
      res.status(400).json({ message: "пользователь не найден" })
    }
    const isPassValid = bcrypt.compareSync(password, user.parol)

    if (!isPassValid) {
      res.status(400).json({ message: "пароль неверный" })
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRETKEY, { expiresIn: "2h" })
    return res.json(
      {
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          photo: user.photo
        }

      }
    )

  }
  catch (e) {
    res.send({ message: "Server error" })
  }

})
//




router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(() => {
      localStorage.removeItem('in_user')
      res.clearCookie('connect.sid')
      res.end()
    })
  }
  else {
    res.end()
  }

})


// Регистрация пользователя
router.post('/registration', [
  check('email', 'email некорректен').isEmail(),
  check('password', 'пароль от 3 до 12').isLength({ options: { min: 3, max: 12 } })
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'некорректный запрос', errors })
  }
  try {
    const candidate = await User.findOne({ where: { email: req.body.email } })

    if (candidate) {
      return res.status(400).json({ message: `Пользователь ${email} уже существует` })
    }

    const hashPass = await bcrypt.hash(req.body.password, 7)

    const registry = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      parol: hashPass,
    })
    res.send({ id: registry.id })


  }
  catch (e) {
    res.send({ message: "Server error" })
  }

})
//

router.get('/auth', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } })
    const token = jwt.sign({ id: user.id }, process.env.SECRETKEY, { expiresIn: "2h" })
    return res.json(
      {
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          photo: user.photo
        }

      }
    )

  }
  catch (e) {
    res.send({ message: "Server error" })
  }

})



module.exports = router
