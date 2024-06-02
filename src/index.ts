import express from 'express';
import http from 'http';
import bodyParcer from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

//console.log("Hello Typesscript!");

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParcer.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Serveur running on http://localhost:8080/');
});

const MONGO_URL = 'mongodb+srv://domerguejonathan91:cK0vPOg39VWg0kDm@cluster0.hjx6dcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

