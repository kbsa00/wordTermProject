import { Application, Response, Request, NextFunction } from 'express';

function WordTermRoutes(app: Application) {
  app.get('api/begrep', (req: Request, res: Response) => {
    res.send('Hello World!');
  });

  app.get('api/begrep/:id', (req: Request, res: Response) => {
    res.send('Hello World-2');
  });
}

export { WordTermRoutes };
