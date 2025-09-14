'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { CalendarIcon } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';

interface CalendarModalProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CalendarModal({
  className = '',
  children,
}: CalendarModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      (async function () {
        const cal = await getCalApi({ namespace: '15min' });
        cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      })();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <button
            className="bg-foreground text-background hover:bg-foreground/90 pointer-events-auto inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-medium no-underline transition-colors"
          >
            <CalendarIcon className="h-3 w-3" />
            Schedule a Call
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-mono text-xl">Schedule a Discovery Call</DialogTitle>
        </DialogHeader>
        <div className="h-[600px] overflow-hidden">
          <Cal
            namespace="15min"
            calLink="thirdindex/15min"
            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
            config={{ layout: 'month_view' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}