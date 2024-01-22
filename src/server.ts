import { app } from './middlewares/app';
import { HealthRoutes } from './routes/Health/HealthRoutes';
import { DebugRoutes } from './routes/Health/debugRoutes';
import { WordTermRoutes } from './routes/wordTermRoutes';
import { WordItemService } from './services/wordTermService';
import { EnvKeys, GetEnvKey } from './utils/environmentalKeys';
import { Worker } from './utils/worker';

const PORT = 3000 || process.env.PORT;
const worker = new Worker();

const wordTermService = new WordItemService(GetEnvKey(EnvKeys.digDir_url));

DebugRoutes(app);
HealthRoutes(app);
WordTermRoutes(app, wordTermService);

app.listen(PORT, () => {
  console.log(`Application is now running on: ${PORT} 🚀`);
});

worker.start();
