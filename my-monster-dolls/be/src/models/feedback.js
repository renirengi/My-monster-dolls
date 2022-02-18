import {Model, DataTypes} from 'sequelize';
import {User, Doll} from './index.js';

export class Feedback extends Model {
  static initialise(sequelize) {
    Feedback.init(
      {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        userId: {type: DataTypes.INTEGER, references: {model: User, key: 'id'}},
        dollId: {type: DataTypes.INTEGER, references: {model: Doll, key: 'id'}},
        starRating: DataTypes.TINYINT,
        hairQuality: DataTypes.TINYINT,
        bodyQuality: DataTypes.TINYINT,
        accessoriesQuality: DataTypes.TINYINT,
        textFeedback: DataTypes.TEXT,
      },
      {sequelize, modelName: 'feedback'},
    );
  }

  static associate() {
    Feedback.belongsTo(User);
    Feedback.belongsTo(Doll);
  }
}
