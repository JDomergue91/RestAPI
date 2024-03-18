import express from 'express';
import http from 'http';
import bodyParcer from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

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
