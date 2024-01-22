import { Application, Response, Request, NextFunction } from 'express';
import { WordItemService } from '../services/wordTermService';
import { checkAuthentication } from '../middlewares/authentication';

export function WordTermRoutes(
  app: Application,
  WorkItemService: WordItemService,
) {
  app.get(
    '/api/begrep',
    //checkAuthentication,
    async (req: Request, res: Response) => {
      const data = await WorkItemService.getAllWorkItems();
      res.status(200).json(data);
    },
  );

  app.get(
    '/api/begrep/:id',
    //checkAuthentication,
    async (req: Request, res: Response) => {
      const id = req.params.id;
      const workItem = await WorkItemService.getWorkItemById(id);

      if (!workItem) {
        res.status(404).json({ error: `WorkItem not found with id ${id}` });
      }
      res.status(200).json(workItem);
    },
  );
}