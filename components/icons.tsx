import clsx from 'clsx';
import React from 'react';
import SVG from 'react-inlinesvg';
import { type SimpleIcon } from 'simple-icons';

export const SearchIcon = (props: any) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}
  >
    <path
      d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
    <path
      d='M22 22L20 20'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
  </svg>
);

export type StackIconProps = {
  icon: SimpleIcon;
  className?: string;
  size?: number;
};
export function StackIcon({ icon, className, size }: Readonly<StackIconProps>) {
  return (
    <SVG
      src={icon.svg}
      className={clsx('bg-white/20 rounded-md h-6 w-auto aspect-square', className)}
      fill={icon.hex}
      // preProcessor={(code) => {
      // 	const i = code.replace(/role=".*?"/g, `fill="#${icon.hex}"`);
      // 	// const i = code.replace(/role=".*?"/g, `fill="currentColor"`);
      // 	return code;
      // }}
      title={icon.title}
    />
  );
}
