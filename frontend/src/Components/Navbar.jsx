import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import trieveLogo from '../assets/trieve-logo.png';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Search', link: '/search', current: false },
  { name: 'Chat', link: '/chat', current: false },
  { name: 'Upload', link: '/upload', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex items-center">
            <img alt="Trieve" src={trieveLogo} className="h-8 w-auto" />
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-auto">
            <div className="flex">
              {navigation.map((item) => (
                <Link
                  to={item.link}
                  key={item.name}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'bg-primary bg-opacity-20 text-primary'
                      : 'text-gray-900 hover:text-primary',
                    'rounded-md px-3 py-2 text-m font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden p-2">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-5 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-primary bg-opacity-20 text-primary'
                  : 'text-gray-900 hover:text-primary',
                'block rounded-md px-5 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
