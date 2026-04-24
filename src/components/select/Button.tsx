import { ListboxButton } from '@headlessui/react';

import { ChevronIcon } from '@/components/ChevronIcon';

type ButtonProps = Parameters<typeof ListboxButton>[0];

export const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return (
    <ListboxButton
      className="bg-blue-20 hover:bg-hover-blue-2 p-3 rounded text-secondary text-black flex items-center focus:outline-none"
      {...props}
    >
      {({ open }) => (
        <>
          {children}
          <ChevronIcon reversed={open} className="ml-1 fill-black" />
        </>
      )}
    </ListboxButton>
  );
};
Button.displayName = 'Button';
