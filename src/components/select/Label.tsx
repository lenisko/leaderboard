import { Label as HeadlessLabel } from '@headlessui/react';
import { PropsWithChildren } from 'react';

export const Label = ({ children, ...props }: PropsWithChildren): JSX.Element => {
  return (
    <HeadlessLabel className="mr-2.5" {...props}>
      {children}
    </HeadlessLabel>
  );
};
Label.displayName = 'Label';
