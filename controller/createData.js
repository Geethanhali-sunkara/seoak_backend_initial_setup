const  users = require("../data")


const createData = async function (req, res) {

try {
        console.log('req.body', req.body)

        const newUser = {
            id: users.length + 1,
            name: req.body.name,
            age: req.body.age
        }

        users.push(newUser)

        res.status(201).json({ message: 'User created successfully!', user: newUser })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error.message })

    }
    




}









module.exports.createData = createData


