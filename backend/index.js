//config dont env 
require('dotenv').config();

//libraries
const express = require('express');
const mongoose = require('mongoose');

//login
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//scemas
const Item = require('./scemas/Item');
const Colection = require('./scemas/Colection');

//connect to database
// mongoose.connect('mongodb+srv://vlad:audifan69xd@openinventory.s94cmds.mongodb.net/?retryWrites=true&w=majority')

// Colection.count()
// .then((count) => {
//     console.log(count);
//     if (count === 0) {
//         Colection.create({
//             name: 'First Colection',
//             img: 'test',
//             created_at: new Date(Date.now()),
//             items: [],
//             perentColections: []
//         })
//     }
// })
//config options
const app = express();
const cors = require('cors');
app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
passport.use(new LocalStrategy((username, password, done) => {
    // Find the user with the given username
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            // User not found
            return done(null, false, { message: 'Incorrect username' });
        }
        // Check the password
        if (user.password != password) {
            return done(null, false, { message: 'Incorrect password' });
        }
        // Successful login
        return done(null, user);
    });
}));

app.get('/login', (req, res) => {
    res.json({ message: 'succes' });
});

//routes post
app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));

app.post('/new-colection', (req, res) => {
    const newColection = new Colection({
        name: req.body.name,
        img: req.body.img,
        created_at: req.body.created_at,
        items: [],
        perentColections: req.body.perentColections
    });
    newColection.save();
    res.json({ message: 'succes' });
});

// app.post('/new-item', async (req, res) =>{
    
// })
//routes get
// app.get('/get-collection-by-name', async (req, res) => {
//     const answer = await Colection.findOne(req.body.name)
//     res.json(answer);
// });

//server listening
app.listen(3000, () => {
    console.log('Listening on port 3000');
})  