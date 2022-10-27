//DECLARATIONS: sequelize, db connection -----------------------------
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//CATEGORY MODEL --------------------------------
class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

//EXPORT MODEL --------------------------
module.exports = Category;