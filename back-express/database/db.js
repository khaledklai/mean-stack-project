module.exports = {
   // db: 'mongodb://database/meandatabase'
   db: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`
};