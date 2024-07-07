const express = require('express')
const { getAllUser, createUser, updateUser, deleteUser, login } = require( '../controller/userController' )
const router = express.Router()

// router.get('/getAllUser', getAllUser)
router.post('/register',createUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)
// router.post('/login', login)

module.exports = router;

