//DECLARATIONS: sequelize, db connection ----------------------------
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//TAG MODEL ------------------------------------
class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

//EXPORT TAG MODEL -------------------------
module.exports = Tag;