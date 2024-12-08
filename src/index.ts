import express, { Express } from 'express';
import RestRouter from './routes';



const app: Express = express();
const port: number = 3000;

app.use('/', RestRouter);


app.listen(port, () => {
	console.log(`Budget-App listening on port ${port}...`);
});