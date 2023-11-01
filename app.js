import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mainRoutes from './src/routes/mainRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import connectDB from './src/config/db.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set public as static folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', mainRoutes);
app.use('/', authRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(app.listen(PORT, () => console.log(`Server running on port ${PORT}`)));
