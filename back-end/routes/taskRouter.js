const express = require('express')
const { getAllTask, createTask, updateTask, deleteTask, getTask } = require( '../controller/taskController' )

const router = express.Router()

router.get('/getAllTask', getAllTask)
router.post('/createTask', createTask)
router.put('/updateTask/:id', updateTask)
router.delete('/deleteTask/:id', deleteTask)
router.get('/getTask/:id', getTask)

module.exports = router;
