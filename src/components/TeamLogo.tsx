import { Instinct } from '@/components/icons/Instinct';
import { Mystic } from '@/components/icons/Mystic';
import { Valor } from '@/components/icons/Valor';
import { Team } from '@/types';

const teamLogos: Record<number, (props: Record<string, unknown>) => JSX.Element> = {
  [Team.VALOR]: Valor,
  [Team.INSTINCT]: Instinct,
  [Team.MYSTIC]: Mystic,
};

interface TeamLogoProps {
  team: Team;
  className?: string;
}

export const TeamLogo = ({ team, className }: TeamLogoProps): JSX.Element => {
  const Logo = teamLogos[team];

  if (!Logo) return <div />;

  return <Logo className={className} />;
};
