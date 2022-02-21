import express from 'express';
import path from 'path';
import { stringify } from 'querystring';
import { Sequelize, Model, DataTypes } from 'sequelize';

const app = express();
const port = process.env.PORT || '8000';

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.listen(port, () => {
  console.info(`Listening to requests on http://localhost:${port}`);
});



const sequelize = new Sequelize('mariadb://monster:YYpP0kIVul3E6oX@khlebko.com:3306/monster');

class User extends Model {}

User.init({
  id: DataTypes. INTEGER,
  name: DataTypes.STRING,
  avatar: DataTypes.STRING,
  personalData: Model,
  password: DataTypes.STRING,
  rights: DataTypes.ENUM("admin", "moderator", "collector", "child", "nobody"),
  collection: Model,
}, { sequelize, modelName: 'user' });


PersonalData.init({
  country: DataTypes.STRING,
  birthday: DataTypes.DATE,
  phone: DataTypes.STRING,
  realName: DataTypes.STRING,
  about: DataTypes.STRING,
},{ sequelize, modelName: 'personalData' });



Collection.init({
  wanted: DataTypes.DECIMAL, ///Сомневаюсь тут был аррей
  own: DataTypes.DECIMAL, ///Сомневаюсь тут был аррей;
  sell: Model,
},{ sequelize, modelName: 'collection' });


Sell.init({
  itemId: DataTypes. INTEGER,
  price: DataTypes.STRING,
  description: DataTypes.STRING,
  photos: DataTypes.DECIMAL, ///Сомневаюсь тут был аррей;
},{ sequelize, modelName: 'sell' });


(async () => {
  await sequelize.sync();
  const jane = await User.create({
    users: [
      {
        id: 1,
        email: "TomieForever@gmail.com",
        name: "Renisenb",
        password: "123456",
        rights: 2,
        personalData: {
          realName: "Хрень",
          phone: "+375291714557",
          about: "Collector",
          country: "BY"
        },
        avatar: "https://99px.ru/sstorage/1/2016/09/image_1060916232919859946.jpg",
        collection: {
          own: [
            158,
            161,
            162,
            163,
            172,
            340,
            198,
            201,
            199,
            220,
            223,
            334,
            354,
            355,
            478,
            476,
            390,
            366,
            231,
            42
          ],
          wanted: [
            42,
            20,
            21,
            43,
            58,
            64,
            95,
            96,
            97,
            109,
            127,
            241,
            193
          ],
          sell: [
            {
              itemId: 111,
              price: "50$",
              description: "Новая кукла, в коробке. Не вскрывалась. Коробка целая не выгорела. Без торга",
              photos: [
                "https://images.ua.prom.st/145997798_w640_h640_kukla-monster-high.jpg"
              ]
            },
            {
              itemId: 45,
              price: "666",
              description: "Хрэнь",
              photos: [
                ""
              ]
            }
          ]
        }
      },
      {
        id: 2,
        email: "p@p.com",
        name: "Pablo",
        password: "12345",
        rights: 2,
        personalData: {
          birthday: ""
        },
        collection: {
          own: [
            1
          ]
        }
      },
      {
        id: 3,
        email: "terry@com",
        name: "Terry",
        password: "123456",
        rights: 3,
        personalData: {
          birthday: "2021-10-18T21:00:00.000Z"
        }
      },
      {
        id: 4,
        email: "terry@com",
        name: "Terry",
        password: "123456",
        rights: 3,
        personalData: {
          birthday: "2021-10-18T21:00:00.000Z"
        }
      },
      {
        id: 5,
        email: "qwerty@com",
        name: "Qwerty",
        password: "Qwerty",
        rights: 2,
        personalData: {
          birthday: "1992-07-15T20:00:00.000Z"
        }
      },
      {
        id: 6,
        email: "Qwerty@com",
        name: "gvbgvb",
        password: "123456",
        rights: 2,
        personalData: {
          realName: "Anna",
          about: "Collector",
          country: "BR"
        }
      },
      {
        id: 7,
        email: "",
        name: "",
        password: "",
        rights: 2,
        personalData: {
          birthday: ""
        }
      }
    ]
  });
  console.log(jane.toJSON());
})();
