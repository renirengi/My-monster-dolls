import {Model, DataTypes} from 'sequelize';
import { Feedback } from './index.js';

export class User extends Model {
  static initialise(sequelize) {
    User.init(
      {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        avatar: DataTypes.STRING,
        password: DataTypes.STRING,
        rights: DataTypes.TINYINT,
        collection: DataTypes.TEXT,
        // Personal
        country: DataTypes.STRING,
        birthday: DataTypes.DATE,
        phone: DataTypes.STRING,
        realName: DataTypes.STRING,
        about: DataTypes.STRING,
      },
      {sequelize, modelName: 'user'},
    );
  }

  static associate() {
    User.hasMany(Feedback);
  }
}
