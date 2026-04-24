import { CronJob } from 'cron';

import {
  addFriendCodeToHistoryTable,
  addGen9ToHistoryTable,
  addRouteTeamAmbassadorBadgesToHistoryTable,
  createTrainerHistoryTable,
  updateTrainerHistory,
} from './database';
import { logger } from './logger';

// update leaderboard every day at 23:58
logger.info(`Current timezone used for the cron: "${Intl.DateTimeFormat().resolvedOptions().timeZone}"`);
CronJob.from({
  cronTime: '0 58 23 * * *',
  onTick: () => {
    void updateTrainerHistory();
  },
  start: true,
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
});

async function bootstrap() {
  try {
    await createTrainerHistoryTable();
    await Promise.all([
      addFriendCodeToHistoryTable(),
      addGen9ToHistoryTable(),
      addRouteTeamAmbassadorBadgesToHistoryTable(),
    ]);
  } catch (err) {
    logger.fatal(err);
  }
}

void bootstrap();
