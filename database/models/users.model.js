const { Model, DataTypes } = require("sequelize");
const sequelize = require('./sequelize')

class Users extends Model {

}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name_user: {
            type: DataTypes.STRING,
            allowNull: false
          },
          age_user: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
          address_user: {
            type: DataTypes.STRING,
            allowNull: true
          },
          phone_user: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          email_user: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password_user: {
            type: DataTypes.STRING,
            allowNull: false
          },
    },
    {
        sequelize: sequelize,
        timestamps: true,
        paranoid: true,
        underscored: true,
        deletedAt: 'deleted_at',
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    }
)

module.exports = Users