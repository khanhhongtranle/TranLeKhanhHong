import express, {Router} from 'express';
import cors from 'cors';
import {getListBooks, getBookById, addBook, updateBook, removeBook} from './controllers/books';

// Init express
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS config
const allowedOrigins = ['*'];
const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(corsOptions));

// Routers
const bookRouter = Router();

bookRouter.get('/books', getListBooks);
bookRouter.get('/books/:id', getBookById);
bookRouter.post('/books', addBook);
bookRouter.put('/books/:id', updateBook);
bookRouter.delete('/books/:id', removeBook);

app.use(bookRouter);

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
