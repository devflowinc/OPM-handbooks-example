import React from 'react';
import DefaultFilledButton from '../Components/DefaultFilledButton';

export default function PageNotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-40 sm:py-40 lg:px-8">
      <div className="flex flex-col gap-6 text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
          Page not found
        </h1>
        <p className="text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <DefaultFilledButton text="Return Home" link="./" />
      </div>
    </main>
  );
}
