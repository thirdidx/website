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
import ProjectInquiryFormDialog from './ProjectInquiryFormDialog';

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
        className="!inset-0 !top-0 !left-0 !h-[100vh] !w-[100vw] !max-w-none !translate-x-0 !translate-y-0 overflow-hidden rounded-none border-0 p-0 text-white"
        showCloseButton={false}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        {/* Blur background overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        {/* Dialog content - no gutter */}
        <div className="relative h-full w-full overflow-hidden">
          <div className="flex h-full flex-col bg-[#0066ff]">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-4">
              <div>
                <DialogTitle className="text-xl font-bold text-white">Get in touch</DialogTitle>
                <DialogDescription className="mt-1 text-sm text-blue-200">
                  Tell us what you're working on.
                </DialogDescription>
              </div>

              {/* Tab Navigation - centered */}
              <div className="flex justify-center px-8 pb-4">
                <div className="flex rounded-lg bg-blue-700/50 p-1">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                      activeTab === 'contact'
                        ? 'bg-white text-[#0066ff]'
                        : 'text-blue-100 hover:text-white'
                    }`}
                  >
                    General Contact
                  </button>
                  <button
                    onClick={() => setActiveTab('project')}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                      activeTab === 'project'
                        ? 'bg-white text-[#0066ff]'
                        : 'text-blue-100 hover:text-white'
                    }`}
                  >
                    Project Inquiry
                  </button>
                </div>
              </div>

              {/* Close button - top right */}
              <div className="flex items-center gap-2 text-white/60 transition-colors hover:text-white">
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <span className="font-mono text-xs">esc to close</span>
              </div>

              {/* Spacer for layout balance */}
              {/* <div className="w-24"></div> */}
            </div>

            {/* Form Content - Scrollable */}
            <div className="flex-1 overflow-y-auto px-8 pb-8">
              <div className="grid grid-cols-12 gap-4 pt-12 md:pt-24">
                {activeTab === 'contact' && <ContactForm variant="dialog" />}
                {activeTab === 'project' && <ProjectInquiryFormDialog />}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
