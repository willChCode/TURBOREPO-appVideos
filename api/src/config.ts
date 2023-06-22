import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.PORT);

export default {
  url: process.env.MONGO_URL,
  port: process.env.PORT || 3000
};
