import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mainRoutes from './src/routes/mainRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import connectDB from './src/config/db.js';
import { errorMiddleware } from './src/middleware/errorMiddleware.js';
import { isActiveRoute } from './src/helpers/routerHelpers.js';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set public as static folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(methodOverride('_method'));
// set up session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: { maxAge: 1000 * 60 * 60 }, // 1h
  })
);

// error middleware
app.use(errorMiddleware);

// setup view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.locals.isActiveRoute = isActiveRoute; // global variable that can be used in all the views

app.use('/', mainRoutes);
app.use('/', authRoutes);
app.use('/', adminRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(app.listen(PORT, () => console.log(`Server running on port ${PORT}`)));
