import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/APIdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyParser connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

//serving static files
app.use(express.static('./..'))

app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${port}`)
);

app.listen(port, () => 
    console.log(`The server is running on port ${port}`)
);