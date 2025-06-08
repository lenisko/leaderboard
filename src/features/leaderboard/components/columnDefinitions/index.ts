import { ColumnsType } from './common';
import { generalLeaderboardColumns } from './generalLeaderboardColumns';
import { MainTab, LeaderboardTab } from '@/features/leaderboard/types';

export type { ColumnsType };
export const leaderboardsData: Record<
  MainTab,
  Array<{
    leaderboard: LeaderboardTab;
    columns: ColumnsType;
    defaultSort: ColumnsType[0]['field'];
  }>
> = {
  [MainTab.GENERAL]: [
    {
      leaderboard: LeaderboardTab.GENERAL,
      columns: generalLeaderboardColumns,
      defaultSort: 'xp',
    },
  ],
};
