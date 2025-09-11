const  users = require("../data")

const getData = async function (req, res) {
    try {
        
        res.status(201).json({ message: 'Here is the user data!', user: users })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error })

    }
}


module.exports.getData = getData