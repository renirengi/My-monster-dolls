import {Model, DataTypes} from 'sequelize';
import {Feedback} from './index.js';

export class Doll extends Model {
  static initialise(sequelize) {
    Doll.init(
      {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        character: DataTypes.STRING,
        description: DataTypes.STRING,
        galleryImagesFileNames: DataTypes.TEXT,
        galleryImagesLinks: DataTypes.TEXT,
        gender: DataTypes.STRING,
        modelNumber: DataTypes.STRING,
        series: DataTypes.STRING,
        type: DataTypes.STRING,
        year: DataTypes.INTEGER,
        exclusive: DataTypes.STRING,
        reissue: DataTypes.BOOLEAN,
        video: DataTypes.STRING,
        promo: DataTypes.STRING,
      },
      {sequelize, modelName: 'doll'},
    );
  }

  static associate() {
    Doll.hasMany(Feedback);
  }
}
