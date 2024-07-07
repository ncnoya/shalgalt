const express = require('express')
const { getAllSubtask, getSubtask, createSubtask, updateSubtask, deleteSubtask } = require( '../controller/subtaskController' )
const router = express.Router()

router.get('/getAllSubtask', getAllSubtask)
router.get('/getSubtask/:id', getSubtask)
router.post('/createSubtask', createSubtask)
router.put('/updateSubtask', updateSubtask)
router.delete('/deleteSubtask', deleteSubtask)

module.exports = router;