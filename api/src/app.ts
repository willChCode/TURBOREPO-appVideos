import express from 'express';
import cors from 'cors';
import config from './config';
import morgan from 'morgan';

import videosR from './routes/videos.routes';

const app = express();

app.set('port', config.port);

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(videosR);

export { app };
