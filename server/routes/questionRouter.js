const router = require('express').Router();
const {Question,User} = require('../db/models');


router.get('/', async(req, res) => {

  const questions = await Question.findAll({
    include: [{
      model: User,
      as: 'User'
    }],
  });
  console.log(questions)
  res.json(questions);
});

module.exports=router