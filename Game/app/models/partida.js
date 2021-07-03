'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partida extends Model {
    static associate(models) {
    }
  };
  Partida.init({
    userId: DataTypes.INTEGER,
    pontuacao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Partida',
  });
  return Partida;
};