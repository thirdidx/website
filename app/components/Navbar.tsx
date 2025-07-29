'use client';

import { useSetAtom } from 'jotai';
import { contactDialogOpenAtom, contactDialogTabAtom } from '@/app/lib/atoms';
import Logo from './Logo';

export default function Navbar() {
  const setDialogOpen = useSetAtom(contactDialogOpenAtom);
  const setDialogTab = useSetAtom(contactDialogTabAtom);

  const handleStartProjectClick = () => {
    setDialogTab('project'); // Set to project inquiry by default from navbar
    setDialogOpen(true);
  };
  return (
    <header className="fixed top-0 left-1/2 z-50 mx-auto mt-4 flex -translate-x-1/2 items-center justify-between gap-6 rounded-full border border-white/20 bg-white/10 px-2 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl backdrop-saturate-200 before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-white/5 before:to-transparent md:mt-6">
      <div className="ml-1 h-auto w-5">
        <Logo />
      </div>
      <nav className="hidden gap-2 text-xs font-semibold md:flex md:gap-4">
        <a className="hover:no-underline" href="#about">
          About
        </a>
        <a className="hover:no-underline" href="#process">
          Process
        </a>
        <a className="hover:no-underline" href="#pricing">
          Pricing
        </a>
        <a className="hover:no-underline" href="#faq">
          FAQ
        </a>
        <a className="hover:no-underline" href="#contact">
          Contact
        </a>
      </nav>
      <div className="flex items-center justify-end">
        <button onClick={handleStartProjectClick} className="btn">
          Start a Project
        </button>
      </div>
    </header>
  );
}
