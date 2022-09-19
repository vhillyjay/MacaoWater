const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');
const app = express();
const dbURI = 'mongodb+srv://admin123:admin123@macaowater.j7ykk8y.mongodb.net/macaowater?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => { 
        app.listen(3000); 
    })
    .catch((err) => { 
        console.log(err) 
    }); 
// if deprecation warning shows. 2nd parameter for mongoose.connect {useNewUrlParser: true, useUnifiedTopology: true}

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});
app.use(blogRoutes);
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});