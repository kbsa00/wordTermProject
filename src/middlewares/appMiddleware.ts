import express, { json, urlencoded } from 'express';

export const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
