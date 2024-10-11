import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

const app = express();
const publicPath = path.resolve('src', 'public');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('src/public'));

app.use('/', express.static(publicPath));

app.engine('hbs', engine({ extname: 'hbs', defaultLayout: false }));

app.set('view engine', 'hbs');

app.set('views', 'src/views');

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/home', function (req, res) {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Server port 3000');
});
