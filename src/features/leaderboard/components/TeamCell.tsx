import type { ICellRendererParams } from 'ag-grid-community';

import { TeamLogo } from '@/components/TeamLogo';

export const TeamCell = ({ value }: ICellRendererParams): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-6 h-6">
      <TeamLogo team={value} />
    </div>
  );
};
