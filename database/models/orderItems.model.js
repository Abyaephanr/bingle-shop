const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class Orderitems extends Model {

}

Orderitems.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          price_order_items:{
            type: DataTypes.DOUBLE,
            allowNull: false
          },
          quantity_items:{
            type: DataTypes.INTEGER,
            allowNull: false
          },
          item_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          order_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
    },
    {
        sequelize: sequelize,
        timestamps: true,
        paranoid: true,
        underscored: true
    }
)

module.exports = Orderitems