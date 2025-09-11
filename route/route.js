const express = require('express')
const router = express.Router()


const createData = require('../controller/createData')
const getData = require('../controller/getData')
const updateData = require('../controller/updateData')
const deleteData = require('../controller/deleteData')



// api endpoints
router.post('/createname', createData.createData)
router.get('/getdata', getData.getData)
router.put('/updatedata/:id', updateData.updateData)
router.delete('/deletedata/:id', deleteData.deleteData)






module.exports = router