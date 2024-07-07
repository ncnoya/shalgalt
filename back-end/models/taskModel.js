const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../DB/connectDB');
const subTaskModel = require( './subtaskModel' );

const taskModel = sequelize.define("tasks",{
    task_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    task_description:{
        type: DataTypes.TEXT,
        allowNull: true
    }
});

taskModel.hasOne(subTaskModel);
(subTaskModel).belongsTo(taskModel);

module.exports = taskModel;