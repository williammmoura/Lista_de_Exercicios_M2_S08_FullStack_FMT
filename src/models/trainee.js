'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trainee.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    rg: DataTypes.STRING,
    cpf: DataTypes.STRING,
    primary_phone_contact: DataTypes.STRING,
    second_phone_contact: DataTypes.STRING,
    date_birth: DataTypes.DATE,
    father_name: DataTypes.STRING,
    mother_name: DataTypes.STRING,
    have_special_needs: DataTypes.BOOLEAN,
    create_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Trainee',
  });
  return Trainee;
};