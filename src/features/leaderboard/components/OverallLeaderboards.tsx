import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { generalLeaderboardColumns } from '@/features/leaderboard/components/columnDefinitions/generalLeaderboardColumns';
import { Leaderboard } from '@/features/leaderboard/components/Leaderboard';
import { Trainer } from '@/types';
import { PeriodSelect } from '@/features/leaderboard/components/PeriodSelect';
import { Button } from '@/components/button';
import { SettingsIcon } from '@/features/leaderboard/components/SettingsIcon';
import { LeaderboardPaginationContextProvider } from '@/features/leaderboard/components/LeaderbordPaginationContext';

export const OverallLeaderboards = ({ trainers }: { trainers: Trainer[] }): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (trainers.length > 0) {
      void router.prefetch(`/profile/${encodeURIComponent(trainers[0].name.toLowerCase())}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [enableSettings, setEnableSettings] = useState(false);

  return (
    <div>
      <div className="flex justify-end mb-3 lg:mb-5">
        <div className="hidden lg:inline-flex">
          <PeriodSelect />
        </div>
        <Button
          className="lg:hidden inline-flex items-center justify-center"
          onClick={() => setEnableSettings(!enableSettings)}
          active={enableSettings}
        >
          <SettingsIcon className="inline" />
        </Button>
      </div>
      <LeaderboardPaginationContextProvider>
        <div className="flex">
          <div
            className={`lg:hidden transition-all duration-300 ${
              enableSettings ? 'max-h-10 mb-3' : 'invisible max-h-0'
            }`}
          >
            <PeriodSelect />
          </div>
        </div>
        <Leaderboard columns={generalLeaderboardColumns} defaultSort="xp" trainers={trainers} />
      </LeaderboardPaginationContextProvider>
    </div>
  );
};
