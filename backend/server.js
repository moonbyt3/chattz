import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import connectToMongoDb from './db/connectToMongoDb.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use('/api/auth/', authRoutes)

// app.get('/', (req, res) => {
//     res.send('Hello');

// });

app.listen(PORT, () => {

    connectToMongoDb();
    console.log(`listening on port ${PORT}`);
})
