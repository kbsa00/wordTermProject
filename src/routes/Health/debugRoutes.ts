import { Application } from 'express';
import { DigDirService } from '../../services/digDirService';
import { EnvKeys, GetEnvKey } from '../../utils/environmentalKeys';
export function DebugRoutes(app: Application) {
  app.get('/debug/sync-data', async (req, res) => {
    const digDirService = DigDirService.getInstance(
      GetEnvKey(EnvKeys.digDir_url),
    );
    
    await digDirService.fetchDigDirData();
    res.status(200).json({ message: 'Fetching data' });
  });
}
