import express, {Express} from 'express';
import router from './router';

const app: Express = express();

app.use(express.json())

app.use('/api', router)

app.listen(3000, 'localhost', ()=> {
    console.log('started @ http://localhost:3000/api')
});