import mongo from 'mongoose';
import config from './config';

const conectionDB = async () => {
  try {
    await mongo.connect(`${config.url}`);
    console.log('conectionDB successfully connected');
  } catch {
    console.log('ERROR: conection database fail');
  }
};
export { conectionDB };
