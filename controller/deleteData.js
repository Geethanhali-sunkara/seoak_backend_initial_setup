let users = [
    { id: 1, name: 'Ram', age: 25 },
    { id: 2, name: 'Rohit', age: 26 },
    { id: 3, name: 'Sita', age: 28 },
]

const deleteData = async function (req, res) {
    try {

        const userId = parseInt(req.params.id)

        const user = users.filter(u => u.id !== userId)

        return res.status(200).json({ message: "User delete successfully!", user })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error.message })

    }
}









module.exports.deleteData = deleteData




