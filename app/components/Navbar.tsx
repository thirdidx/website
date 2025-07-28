'use client';

import React from 'react';
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
    <header className="fixed top-0 left-1/2 z-50 mx-auto flex -translate-x-1/2 items-center justify-between gap-6 rounded-full border border-white/20 bg-white/10 px-2 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl backdrop-saturate-200 before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-white/5 before:to-transparent mt-4 md:mt-6">
      <div className="ml-1 h-auto w-5">
        <Logo />
      </div>
      <nav className="flex gap-4 text-xs font-semibold md:gap-6">
        <a href="#about">about</a>
        <a href="#process">process</a>
        <a href="#pricing">pricing</a>
        <a href="#faq">faq</a>
        <a href="#contact">contact</a>
      </nav>
      <div className="flex items-center justify-end">
        <button onClick={handleStartProjectClick} className="btn">
          start a project
        </button>
      </div>
    </header>
  );
}
