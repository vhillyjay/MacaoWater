const express = require('express');
const morgan = require('morgan');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    // res.send('<h1>hello world</h1>');
    // res.sendFile('./views/index.html', { root: __dirname });
    const blogs = [
        {title: 'Blog1 Example', snippet: '1Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'Blog2 Example', snippet: '2Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'Blog3 Example', snippet: '3Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    ];
    res.render('index', { title: 'Home', blogs });
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
});
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});