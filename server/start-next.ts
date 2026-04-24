import { config } from 'node-config-ts';
import { config as configureEnv } from 'dotenv';
import { nextStart } from 'next/dist/cli/next-start.js';

configureEnv();
nextStart({ port: config.port || 3000 });
