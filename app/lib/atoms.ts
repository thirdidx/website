import { atom } from 'jotai';

// Contact dialog state
export const contactDialogOpenAtom = atom(false);
export const contactDialogTabAtom = atom<'contact' | 'project'>('contact');