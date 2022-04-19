const express = require('express');
const addUser = require('./add-user');

const router = express.Router();

router.get('/user', (req, res) => {
    const user = addUser.users;
    res.render('user.ejs', {pageTitle: 'Users', path: '/user', users: user});
});

module.exports = router;