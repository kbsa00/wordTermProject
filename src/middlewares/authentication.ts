import { EnvKeys, GetEnvKey } from '../utils/environmentalKeys';
import { Response, Request, NextFunction } from 'express';

export function checkAuthentication(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const apiKey = GetEnvKey(EnvKeys.apiKey);
  const key = req.headers['x-api-key'];

  if (apiKey === key) next();

  res.status(401).json({ error: 'Unauthorized' });
}
