import { Application, Response, Request } from 'express';

export function HealthRoutes(app: Application) {
  app.get('/isAlive', (req: Request, res: Response) => {
    res.sendStatus(200);
  });
}
