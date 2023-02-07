const Users = require('./users.model')
const Items = require('./items.model')
const Orders = require('./orders.model')
const Orderitems = require('./orderItems.model')
const sequelize = require('./sequelize')

Items.belongsTo(Users, {
  foreignKey: "user_id"
})

Users.hasMany(Items, {
  as: "items"
})

Orders.belongsTo(Users, {
  foreignKey: "user_id"
})

Users.hasMany(Orders, {
  as: "orders" 
})

Orderitems.belongsTo(Items, {
  foreignKey: "item_id"
})

Items.hasMany(Orderitems, {
  as: "orderitems"
})

Orderitems.belongsTo(Orders, {
  foreignKey: "order_id"
})

Orders.hasMany(Orderitems, {
  as: "orderitems"
})


module.exports = {
  Users,
  Items,
  Orders,
  Orderitems,
  sequelize
}