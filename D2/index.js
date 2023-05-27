const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const authorsControllers = require('./controllers/authorControllers');


app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
    return response.send("<h1>Ciao a tutti!!!</h1>");
});

app.get('/authors', authorsControllers.getAllAuthors);
app.get('/authors/:id', authorsControllers.getAuthorsById);
app.post('/authors', authorsControllers.createAuthor);
app.put('/authors/:id', authorsControllers.updateAuthor);
app.delete('/authors/:id', authorsControllers.deleteAuthor);


async function start() {
    try {
        await mongoose.connect('mongodb+srv://alessiotoninello:2Y3595DtzKIPhDEH@firstdb.xzwjsk8.mongodb.net/');
        app.listen(port, () => console.log('Server attivo sulla porta 3000!!!', 'localhost:3000/authors'));
    } catch(err) {
        console.error(err);
    }
}

start();
