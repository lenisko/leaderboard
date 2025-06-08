import { defineMessages } from 'react-intl';

import { LeaderboardTab } from '@/features/leaderboard/types';

export const leaderboardTabTranslations = defineMessages({
  [LeaderboardTab.GENERAL]: {
    defaultMessage: 'General',
    id: 'leaderboard.general',
    description: 'General leaderboard title',
  },
});
