
import fs from 'node:fs';
import path from 'node:path';

const environment = process.env.APP_ENV || 'staging';

const allowedEnvironments = ['staging', 'preprod', 'prod'];

if (!allowedEnvironments.includes(environment)) {
  throw new Error(`Invalid environment: ${environment}`);
}

const configPath = path.join(
  process.cwd(),
  'config',
  `${environment}.json`
);

const config = JSON.parse(
  fs.readFileSync(configPath, 'utf8')
);

export default config;

