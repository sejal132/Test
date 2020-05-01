const express = require('express');
const bodyParser = require('body-parser');
const db=require('./userqueries')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })

)

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/login',db.getUser1);

app.post('/signup',db.createUser);


app.listen(port,function(){
    console.log('Server started on port 3000');
})
