'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { contactDialogOpenAtom, contactDialogTabAtom } from '@/app/lib/atoms';
import ContactForm from './ContactForm';
import ProjectInquiryForm from './ProjectInquiryForm';

interface ContactDialogProps {
  showTrigger?: boolean;
}

export default function ContactDialog({ showTrigger = true }: ContactDialogProps) {
  const [isOpen, setIsOpen] = useAtom(contactDialogOpenAtom);
  const [activeTab, setActiveTab] = useAtom(contactDialogTabAtom);

  // ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, setIsOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {showTrigger && (
        <DialogTrigger asChild>
          <button className="rounded-md bg-[#0066ff] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#0052cc]">
            Start a Project
          </button>
        </DialogTrigger>
      )}
      <DialogContent
        className="border-foreground/20 bg-background text-foreground !h-auto max-h-[85vh] !w-[90vw] !max-w-4xl overflow-hidden border p-0"
        showCloseButton={false}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        {/* CLI-style header bar */}
        <div className="border-foreground/20 flex items-center justify-between border-b px-6 py-4">
          <DialogTitle className="font-mono text-sm font-bold uppercase">Get in touch</DialogTitle>
          <div className="flex items-center gap-4">
            {/* Tab Navigation */}
            <div className="flex gap-6 font-mono text-xs uppercase">
              <button
                onClick={() => setActiveTab('contact')}
                className={`transition-colors ${
                  activeTab === 'contact'
                    ? 'text-foreground border-foreground border-b'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                General
              </button>
              <button
                onClick={() => setActiveTab('project')}
                className={`transition-colors ${
                  activeTab === 'project'
                    ? 'text-foreground border-foreground border-b'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Project inquiry
              </button>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 font-mono text-xs transition-colors"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Form Content - Scrollable */}
        <div className="max-h-[calc(85vh-80px)] overflow-y-auto px-12 py-8">
          <div className="w-full">
            {activeTab === 'contact' && <ContactForm variant="default" />}
            {activeTab === 'project' && <ProjectInquiryForm variant="default" />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
