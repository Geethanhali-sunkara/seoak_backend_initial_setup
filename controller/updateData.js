const  users = require("../data")

const updateData = async function (req, res) {
    try {
         console.log("req.body:", req.body)
        const userId = parseInt(req.params.id)

        const user = users.find(u => u.id === userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }

        user.name = req.body.name
        user.age = req.body.age

        return res.status(200).json({ message: "User update successfully!", user })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error.message })

    }
}









module.exports.updateData = updateData




// Github
// Postman