const express = require('express');
const path = require('path');

const app = express();

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);
app.use(userRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);