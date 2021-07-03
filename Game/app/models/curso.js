'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      this.belongsTo(models.Area)
    }
  };
  Curso.init({
    sigla: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4,4],
          msg: "A sigla precisa conter 4 caracteres."
        }
      }
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3,50],
          msg:  "O nome do curso precisa conter entre 3 e 50 caracteres."
        }
      }
    },
    descricao: DataTypes.STRING,
    areaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};