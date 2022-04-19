const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const addUserRoute = require('./routes/add-user');
const userRoute = require('./routes/user');

const app = express();

app.set('view engines', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addUserRoute.routes);
app.use(userRoute);

app.use((req, res) => {
    res.status(404).render('404.ejs', {pageTitle: 'Page Not Found', path: ''});
});

app.listen(3000, () => {
    console.log('Server Run');
});