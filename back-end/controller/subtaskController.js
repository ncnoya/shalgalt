const subTaskModel = require('../models/subtaskModel')

exports.getAllSubtask = async (req, res) =>{
    try {
        let subtask = await subTaskModel.findAll()
        res.status(200).json(subtask)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getSubtask = async (req, res) =>{
    let id = req.params.id;
    try {
        let subtask = await subTaskModel.findByPk(id)
        res.status(200).json(subtask)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.createSubtask = async (req, res) => {
    try {
        let subtask = await subTaskModel.create(req.body)
        res.status(200).json(subtask)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteSubtask = async(req, res) => {
    try {
        let subtask = await subTaskModel.destroy({ where: {id: req.params.id}})
        res.status(200).json(subtask)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateSubtask = async(req, res) => {
    try {
        let subtask = await subTaskModel.update(req.body, {where: {id: req.params.id}})
        res.status(200).json(subtask)
    } catch (error) {
        res.status(400).json(error)
    }
}