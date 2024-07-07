const { Await } = require( 'react-router-dom' )
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')

// exports.getAllUser = async (req, res) =>{
//     try {
//         let User = await UserModel.findAll()
//         res.status(200).json(User)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

// exports.getUser = async (req, res) =>{
//     try {
//         let User = await UserModel.findByPk(req.params.id)
//         res.status(200).json(User)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// }

exports.createUser = async (req, res) => {
    try {
        let User = await UserModel.create(req.body)
        res.status(200).json(User)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteUser = async(req, res) => {
    try {
        let User = await UserModel.destroy({ where: {id: req.params.id}})
        res.status(200).json(User)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateUser = async(req, res) => {
    try {
        let User = await UserModel.update(req.body, {where: {id: req.params.id}})
        res.status(200).json(User)
    } catch (error) {
        res.status(400).json(error)
    }
}

// exports.login = async (req, res) =>{
    
//     try {
//         const {email, password} = req.body
//         const verifyEmail = await UserModel.findOne({ where: {email: req.body.email}})
//         if(!verifyEmail){
//             res.status(400).json({error:"newtreh medeelel buruu baina"})
//             console.log(error)
//         }
//         const checkPassword = await bcrypt.compare(req.body.password, verifyEmail.password)
//         console.log("pass", checkPassword)
//         if(!checkPassword){
//             res.status(400).json({error: "newtreh medeelel buruu baina"})
//         }
//         res.json({ message: 'Logged in successfully' });
//     } catch (error) {
//         res.status(400).json(error);
        
//     }
// }