import { app } from './middlewares/appMiddleware';
import { WordTermRoutes } from './routes/wordTermRoutes';


const PORT = 3000;

WordTermRoutes(app);

app.listen(PORT, () => {
  console.log(`Application is now running on: ${PORT} 🚀`);
});
