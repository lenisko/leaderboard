import { useIntl } from 'react-intl';
import Image from 'next/image';

import { FightIcon } from '@/components/icons/FightIcon';
import { GlobalStats as GlobalStatsInterface } from '@/types';
import { InfoCard } from '@/components/InfoCard';
import { PokeballIcon } from '@/components/icons/PokeballIcon';
import { PokemonIcon } from '@/components/icons/PokemonIcon';
import { TrainerIcon } from '@/components/icons/TrainerIcon';

interface GlobalStatsProps {
  className?: string;
  globalStats: GlobalStatsInterface;
}

export const GlobalStats = ({ className, globalStats }: GlobalStatsProps): JSX.Element => {
  const intl = useIntl();

  return (
    <div
      className={`grid grid-cols-[repeat(5,minmax(200px,1fr))] gap-2.5 lg:gap-5 content-start overflow-x-auto mb-4 lg:mb-7.5 ${
        className || ''
      }`}
    >
      <InfoCard
        icon={<TrainerIcon />}
        title={intl.formatMessage({
          defaultMessage: 'Registered Trainers',
          id: 'leaderboard.registered_trainers',
          description: 'Registered Trainers info card title in the leaderboard page',
        })}
        value={intl.formatNumber(globalStats.totalRegisteredTrainers)}
      />
      <InfoCard
        icon={<PokeballIcon />}
        title={intl.formatMessage({
          defaultMessage: 'Total Players XP',
          id: 'leaderboard.total_players_xp',
          description: 'Total Players XP info card title in the profile page',
        })}
        value={intl.formatNumber(globalStats.totalXp)}
      />
      <InfoCard
        icon={<FightIcon />}
        title={intl.formatMessage({
          defaultMessage: 'Total number of fights',
          id: 'leaderboard.total_fights',
          description: 'Total number of fights info card title in the profile page',
        })}
        value={intl.formatNumber(globalStats.totalBattlesWon)}
      />
      <InfoCard
        icon={<PokemonIcon />}
        title={intl.formatMessage({
          defaultMessage: 'Total Pokémon caught',
          id: 'leaderboard.total_pokemon_caught',
          description: 'Total Pokémon caught info card title in the profile page',
        })}
        value={intl.formatNumber(globalStats.totalPokemonCaught)}
      />
      <InfoCard
        icon={
          <Image src="/badges/achievements/Badge_1_3_01.webp" alt="Walking Badge" width={40} height={40} priority />
        }
        title={intl.formatMessage({
          defaultMessage: 'Total KM walked',
          id: 'leaderboard.total_km_walked',
          description: 'Total KM walked info card title in the profile page',
        })}
        value={intl.formatNumber(globalStats.totalKmWalked)}
      />
    </div>
  );
};
