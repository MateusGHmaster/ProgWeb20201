'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    static associate(models) {
      this.hasMany(models.Curso)
    }
  };
  Area.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Area',
  });
  return Area;
};