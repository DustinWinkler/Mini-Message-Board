const { Router } = require('express');
const format = require('date-fns/formatDistanceToNow');

const router = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Mini Messageboard',
    messages,
    format
  });
});

router.get('/new', (req, res) => {
  res.render('form', {
    title: 'New Message'
  });
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
