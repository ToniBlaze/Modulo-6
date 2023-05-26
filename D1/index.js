const express = require('express')
const app = express();
app.use(express.json());

app.listen(3000, () => console.log('Server attivo sulla porta 3000!!! http://localhost:3000/' ));

let authors = [{
    _id: 1,
    name: "Giacomo",
    lastname: "Rossi",
    email: "giac.rossi@boh.it",
    birthdate: "10/01/2000",
    avatar: "https://flyclipart.com/thumb2/avatar-casual-lifestyle-looking-male-people-person-icon-131346.png"
},
{
    _id: 2,
    name: "Gigio",
    lastname: "Pluto",
    email: "g.pluto@boh.it",
    birthdate: "20/07/1990",
    avatar: "https://thumbs.dreamstime.com/b/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-47075235.jpg"
}];


app.get('/', (req, res) => {
    return res.send("Benvenuto/a!")
})