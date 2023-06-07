const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const authorsControllers = require('./controllers/authorControllers');
const postsControllers = require('./controllers/postsControllers');


app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
    return response.send("<h1>Ciao a tutti!!!</h1>");
});

// ***  CRUD AUTHORS *** 

app.get('/authors', authorsControllers.getAllAuthors);
app.get('/authors/:id', authorsControllers.getAuthorsById);
app.post('/authors', authorsControllers.createAuthor);
app.put('/authors/:id', authorsControllers.updateAuthor);
app.delete('/authors/:id', authorsControllers.deleteAuthor);

// ***  CRUD POSTS *** 

app.get('/blogPosts', postsControllers.getAllPosts);
app.get('/blogPosts/:id', postsControllers.getPostsById);
app.post('/blogPosts', postsControllers.createPost);
app.put('/blogPosts/:id', postsControllers.updatePost);
app.delete('/blogPosts/:id', postsControllers.deletePost);


async function start() {
    try {
        await mongoose.connect('mongodb+srv://alessiotoninello:2Y3595DtzKIPhDEH@firstdb.xzwjsk8.mongodb.net/');
        app.listen(port, () => console.log('Server attivo sulla porta 3000!!!', 'localhost:3000/'));
    } catch(err) {
        console.error(err);
    }
}

start();
