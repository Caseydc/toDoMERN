const Express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const toDoRouter = require('./routes/toDoRoutes.js');

const app = Express();
const PORT = 4000;

app.use(cors())
  .use(morgan('short'))
  .use(Express.json())
  .use(toDoRouter);

async function bootstrap () {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydb');
    app.listen(PORT, async () => {
        console.log(`Server is riding on a mongoose at, http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error)
  }
}

bootstrap();