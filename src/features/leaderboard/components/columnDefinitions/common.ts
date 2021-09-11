import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Trainer } from '@/types';

export type ColumnsType = Array<
  GridColDef & {
    field: Extract<keyof Trainer, 'trainer_id' | 'name' | 'level' | 'xp' | 'battles_won' | 'caught_pokemon'>;
  }
>;

export const commonColumns: ColumnsType = [
  {
    field: 'trainer_id',
    width: 90,
    sortable: false,
    type: 'number',
    valueGetter: (params: GridValueGetterParams): number => {
      return params.api.getRowIndex(params.id) + 1;
    },
  },
  {
    field: 'name',
    flex: 1,
    minWidth: 150,
  },
];
