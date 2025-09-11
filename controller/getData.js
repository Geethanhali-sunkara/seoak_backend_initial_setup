let users = [
    { id: 1, name: 'Ram', age: 25 },
    { id: 2, name: 'Rohit', age: 26 },
    { id: 3, name: 'Sita', age: 28 },
]

const getData = async function (req, res) {
    try {
        
        res.status(201).json({ message: 'Here is the user data!', user: users })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error })

    }
}


module.exports.getData = getData