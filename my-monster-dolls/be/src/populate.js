import 'dotenv/config';
import {JSON, Sequelize} from 'sequelize';
import {User, Doll, Feedback} from './models/index.js';
import {readJsonFile} from './utils.js';

const {users} = await readJsonFile('../fe/data/db.json');

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

// Init all models

User.initialise(sequelize);
Doll.initialise(sequelize);
Feedback.initialise(sequelize);
User.associate();
Doll.associate();
Feedback.associate();

// Drop and create all tables

try {
  await sequelize.sync({force: true});
} catch (err) {
  console.error(err);
}

// Populate DB

await populateUsers();
await populateDolls();

// Functions

async function populateUsers() {
  const usersData = users.map((user) => {
    const {id, name, email, avatar, password, rights} = user;
    const collection = JSON.stringify(user.collection || []);
    const {country, birthday, phone, realName, about} = user.personalData;

    return {id, name, email, avatar, password, rights, collection, country, birthday, phone, realName, about};
  });

  const result = await User.bulkCreate(usersData);
  console.log(result);
}

async function populateDolls() {
  const dollsData = users.map((doll) => {
    const {id, character, description, gender, modelNumber, type, year, exclusive, reissue, video, promo, series} = doll;
    const galleryImagesFileNames = JSON.stringify(doll.galleryImagesFileNames);
    const galleryImagesLinks = JSON.stringify(doll.galleryImagesLinks);
    
    return {id, character, description, series, gender, modelNumber, type, year, exclusive, reissue, video, promo,galleryImagesFileNames, galleryImagesLinks};
  });

  const result = await Doll.bulkCreate(dollsData);
  console.log(result);
}
