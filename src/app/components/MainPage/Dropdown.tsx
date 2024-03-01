import { Fragment, FC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import cn from 'classnames';

interface DropdownProps {
  anchorsNames: readonly string[]
}
const Dropdown: FC<DropdownProps> = ({ anchorsNames }) => (
  <div className="md:hidden">
    <Menu as="div" className="relative inline-block text-right px-6">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-600">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            </path>
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-4 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {anchorsNames.map((name) => (
            <div key={anchorsNames.indexOf(name)} className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#examples"
                    className={cn(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm mx-3 text-lg text-indigo-500 uppercase hover:text-gray-300',
                    )}
                  >
                    {name}
                  </a>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);

export default Dropdown;
