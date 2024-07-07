const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../DB/connectDB')

const subTaskModel = sequelize.define("subTasks", {
    subTask_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtask_description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = subTaskModel;