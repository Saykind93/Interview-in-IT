const router = require('express').Router();
const {Question,User} = require('../db/models');

//переделал авторизацию через node-localstorage(nodeLocalStorage)
let LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');









const db = [{
  email: 'a@a.a',
  password: '123'
}]




//для авторизации
router.post("/login", (req, res) => {
 // console.log(req.body);
  const {email, password} = req.body
  const user = db.find((user) => user.email === email && user.password === password)
  console.log('fdfdvdfdfdf', user);
  if (user) {
    console.log('testttt');
    req.session.user = {email: user.email}
    console.log('сессия тут', req.session);
    localStorage.setItem('in_user', user.email)
    console.log('fgdfgdfgdf', localStorage.getItem('in_user'));
    return res.status(200).end()
  }
  
  res.status(401).end()
});


router.get('/logout', (req, res) => {
  console.log(req.session);
  if(req.session) {req.session.destroy(() => {
    localStorage.removeItem('in_user')
    res.clearCookie('connect.sid')
    res.end()
  })}
  else {
    res.end()
  }
  
  })





module.exports=router