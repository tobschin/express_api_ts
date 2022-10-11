import app from './app';
import { connectDb } from './database';

connectDb().then(()=> {
    app.listen(3000, () => {
        console.log('app started in http://localhost:3000/api')
    });
}, err => {
    console.error('DB-Connection could not be established', err)
})

