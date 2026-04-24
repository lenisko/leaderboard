import { ListboxOptions } from '@headlessui/react';

type OptionsProps = Parameters<typeof ListboxOptions>[0];

export const Options = ({ children, ...props }: OptionsProps): JSX.Element => {
  return (
    <ListboxOptions
      className="absolute focus:outline-none rounded bg-white-100 right-0 top-11 py-1 drop-shadow-normal z-10 transition duration-300 data-[closed]:opacity-0"
      {...props}
    >
      {children}
    </ListboxOptions>
  );
};
Options.displayName = 'Options';
