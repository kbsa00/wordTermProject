import { DigDirService } from '../services/digDirService';
import { EnvKeys, GetEnvKey } from './environmentalKeys';

export class Worker {
  private intervalId: NodeJS.Timeout | null;
  private digiDirService: DigDirService;

  constructor() {
    this.intervalId = null;
    this.digiDirService = DigDirService.getInstance(
      GetEnvKey(EnvKeys.digDir_url),
    );
    this.digiDirService.fetchDigDirData();
  }

  start() {
    this.intervalId = setInterval(
      () => {
        this.digiDirService.fetchDigDirData();
      },
      10 * 60 * 1000,
    );
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
