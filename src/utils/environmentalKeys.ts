import * as dotenv from 'dotenv';
import * as path from 'path';

const env = process.env.NODE_ENV || 'local';
const envFilePath = path.resolve(__dirname, '../../.env.' + env);
dotenv.config({ path: envFilePath });

export enum EnvKeys {
  apiKey = 'API_KEY',
  digDir_url = 'DIGDIR_URL',
}

export function GetEnvKey(name: EnvKeys): any {
  return process.env[name];
}
