const  users = require("../data")

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




