const TaskModel = require('../models/taskModel')
const Sequelize = require('sequelize')
const mysql = require('mysql2')

const db = require('../DB/connectDB')

exports.getAllTask = async (req, res) =>{
    try {
        let Task = await TaskModel.findAll()
        res.status(200).json(Task)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getTask = async (req, res) =>{
    let id = req.params.id;
    try {
        let Task = await TaskModel.findByPk(id)
        res.status(200).json(Task)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}

exports.createTask = async (req, res) => {
    try {
        let Task = await TaskModel.create(req.body)
        res.status(200).json(Task)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteTask = async(req, res) => {
    try {
        let Task = await TaskModel.destroy({ where: {id: req.params.id}})
        res.status(200).json(Task)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateTask = async(req, res) => {
    try {
        let Task = await TaskModel.update(req.body, {where: {id: req.params.id}})
        res.status(200).json(Task)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }
}