const Sequilize = require('sequelize')

const sequelize = new Sequilize("sw925-2", "root", "Ncnoya_4455", {
    host: "localhost",
    dialect: "mysql",
  }); 

// const createTable = async () => {
//   try {
//     await sequelize.sync({ alter: true });
//     console.log("success");
//   } catch (error) {
//     console.log("error");
//   }
// };
// createTable();

module.exports = sequelize;
