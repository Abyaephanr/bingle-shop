const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class Orders extends Model {

}

Orders.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          total_order:{
            type: DataTypes.DOUBLE,
            allowNull: false
          },
          status_order:{
            type: DataTypes.BOOLEAN,
            allowNull: false
          },
          user_id: {
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

module.exports = Orders