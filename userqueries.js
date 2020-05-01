const pool = require('./pool');

const createUser = (req, res) => {
    const { name, email, password, contact } = req.body;
    pool.query('INSERT INTO users (name,email,password,contact) VALUES($1,$2,$3,$4)', [name, email, password, contact],
        (error, result) => {
            if (error) { throw error; }

            res.status(200).send(`User added with id:${result.insertId}`);


        })
    pool.query('SELECT * FROM users', (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const getUser1 = (req, res) => {
    const { email, password } = req.body;
    pool.query('SELECT * FROM users WHERE "password" = $2 and "email" = $1', [email, password],
        (error, result) => {
            if (error)
                throw error
            res.status(200).json(result.rows)

        })
}




module.exports = { createUser, getUser };

