const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class Items extends Model {

}

Items.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_item: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price_item: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        stock_item: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description_item: {
            type: DataTypes.STRING,
            allowNull: true
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

module.exports = Items