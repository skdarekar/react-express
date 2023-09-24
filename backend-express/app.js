import express from 'express';
import cors from 'cors';
import { rateLimiterUsingThirdParty } from './middlewares/index.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiterUsingThirdParty);

app.use('/user', userRoutes);
const port = 3001;

// app.get('/', (req, res) => {
//     res.send({
//         Message: 'Hello World!', routes: ["/download"]
//     });
// })

// app.get('/download', (req, res) => {
//     res.download('./files/logo.png');
// })

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
})