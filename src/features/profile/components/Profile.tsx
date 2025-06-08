import { useEffect, useState } from 'react';

import { Trainer } from '@/types';
import { TrainerCard } from '@/features/profile/components/TrainerCard';
import { OverviewCards } from '@/features/profile/components/OverviewCards';
import { Group, Panel, Panels } from '@/components/tab';
import { useBreakpoint } from '@/utils/useBreakpoint';

interface ProfileProps {
  trainer: Trainer;
}

export const Profile = ({ trainer }: ProfileProps): JSX.Element => {
  const isDesktop = useBreakpoint('lg');
  const isMobile = !isDesktop;
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    setSelectedTabIndex(0);
  }, [isDesktop, setSelectedTabIndex]);

  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-5">
        <div className="lg:col-span-7">
          <TrainerCard trainer={trainer} />
          <div className="mt-7">
            <Group selectedIndex={selectedTabIndex} onChange={setSelectedTabIndex}>
              <Panels className="mt-5">
                {isMobile && (
                  <Panel>
                    <OverviewCards trainer={trainer} />
                  </Panel>
                )}
              </Panels>
            </Group>
          </div>
        </div>
        <div className="hidden lg:grid lg:col-span-5">
          <OverviewCards trainer={trainer} />
        </div>
      </div>
    </>
  );
};
