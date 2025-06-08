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
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    setSelectedTabIndex(0);
  }, [isDesktop]);

  return (
    <div className="lg:w-[60%] lg:mx-auto">
      <div className="lg:grid lg:grid-cols-12 lg:gap-5">
        <div className="lg:col-span-12">
          <TrainerCard trainer={trainer} />
          <div className="mt-7">
            <Group selectedIndex={selectedTabIndex} onChange={setSelectedTabIndex}>
              <Panels className="mt-5">
                <Panel>
                  <OverviewCards trainer={trainer} />
                </Panel>
              </Panels>
            </Group>
          </div>
        </div>
      </div>
    </div>
  );
};
