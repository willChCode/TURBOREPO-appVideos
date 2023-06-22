import { app } from './app';
import { conectionDB } from './database';

//conection
conectionDB();

const port = app.get('port');

app.listen(port, () => {
  console.log(`server on PORT ${port}`);
});
