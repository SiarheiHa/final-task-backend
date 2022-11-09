import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';

const UserName = 'PMAuser';
const Password = 'LkTpL1LKxyoTckZ3';
const clasterInfo = 'cluster0.jjvndnd';
const projectName = 'PMA';

(async () => {
  try {
    // await mongoose.connect(`mongodb+srv://${UserName}:${Password}@${clasterInfo}.mongodb.net/${projectName}`);
    await mongoose.connect('mongodb+srv://PMAuser:LkTpL1LKxyoTckZ3@cluster0.jjvndnd.mongodb.net/?retryWrites=true&w=majority');
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
