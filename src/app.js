//////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////
const express = require('express');

//////////////////////////////////////////////////////
// CREATE APP
//////////////////////////////////////////////////////
const app = express();

//////////////////////////////////////////////////////
// USES
//////////////////////////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//////////////////////////////////////////////////////
// SETUP ROUTES
//////////////////////////////////////////////////////
const mainRoutes = require('./routes/mainRoutes');
app.use("/", mainRoutes);
app.get("/", (req, res) => {
    res.send('I am Alive!');
})

//////////////////////////////////////////////////////
// EXPORT APP
//////////////////////////////////////////////////////
module.exports = app;