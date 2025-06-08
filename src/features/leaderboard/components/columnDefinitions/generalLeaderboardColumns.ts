import type { ValueGetterParams } from '@ag-grid-community/core';

import { ColumnsType, commonColumns } from '@/features/leaderboard/components/columnDefinitions/common';

export const generalLeaderboardColumns: ColumnsType = [
  ...commonColumns,
  {
    field: 'level',
    minWidth: 130,
    type: 'number',
  },
  {
    field: 'xp',
    minWidth: 120,
    type: 'number',
  },
  {
    field: 'caught_pokemon',
    minWidth: 150,
    type: 'number',
  },
  {
    field: 'km_walked',
    minWidth: 110,
    type: 'number',
    valueGetter: ({ data }: ValueGetterParams): number => {
      return Math.round(data.km_walked);
    },
  },
  {
    field: 'gbl_rank',
    minWidth: 10,
    type: 'number',
  },
];
