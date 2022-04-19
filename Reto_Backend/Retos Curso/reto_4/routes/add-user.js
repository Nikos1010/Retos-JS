const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.render('add-user.ejs', {pageTitle: 'Add User', path: '/'});
});

router.post('/add-user', (req, res) => {
    users.push({name: req.body.name});
    res.redirect('/user');
})

exports.routes = router;
exports.users = users;