import { ListboxOption } from '@headlessui/react';
import { PropsWithChildren } from 'react';

type OptionProps = PropsWithChildren<Parameters<typeof ListboxOption>[0]>;

export const Option = ({ children, ...props }: OptionProps): JSX.Element => {
  return (
    <ListboxOption {...props}>
      {({ selected }) => (
        <li
          className={`py-2 px-2.5 cursor-pointer focus:outline-none ${
            selected ? 'bg-[#F0F4FF] text-blue-100' : 'text-grey-70'
          }`}
        >
          {children}
        </li>
      )}
    </ListboxOption>
  );
};
