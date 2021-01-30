const Sequelize = require('sequelize')
const sequelize = require('./../utils/database')

const Order = sequelize.define('order',{
    id : {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    quantity : {
        type:Sequelize.INTEGER
    }
});
 module.exports = Order