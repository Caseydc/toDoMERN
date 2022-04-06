const Express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const toDoRouter = require('./routes/toDoRoutes.js');

const app = Express();

app.use(cors())
  .use(morgan('short'))
  .use(Express.json())
  .use(toDoRouter);

async function bootstrap () {
  try {
    await mongoose.connect('mongodb://localhost:27017/toDoListOmar');
    app.listen(3000, async () => {
        console.log('Server is running and connected to db, http://localhost:3000');
    });
  } catch (error) {
    console.error(error)
  }
}
bootstrap();