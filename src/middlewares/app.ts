import express, { json, urlencoded } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerdef from '../swaggerdef';
export const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerdef));
