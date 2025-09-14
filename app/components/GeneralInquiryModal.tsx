'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { MessageCircleIcon } from 'lucide-react';

interface GeneralInquiryModalProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GeneralInquiryModal({
  className = '',
  children,
}: GeneralInquiryModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setOpen(false);
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <button className="border-foreground text-foreground hover:bg-foreground hover:text-background pointer-events-auto inline-flex items-center gap-2 border px-4 py-2 font-mono text-xs font-medium no-underline transition-colors">
            <MessageCircleIcon className="h-3 w-3" />
            Send Message
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl">Get in Touch</DialogTitle>
          <DialogDescription className="font-mono text-xs">
            Tell us about your project or ask any questions you have.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-xs">
                Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-foreground/20 focus:border-foreground w-full border bg-transparent px-3 py-2 font-mono text-xs focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block font-mono text-xs">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-foreground/20 focus:border-foreground w-full border bg-transparent px-3 py-2 font-mono text-xs focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="mb-1 block font-mono text-xs">
              Company
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="border-foreground/20 focus:border-foreground w-full border bg-transparent px-3 py-2 font-mono text-xs focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block font-mono text-xs">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-foreground/20 focus:border-foreground w-full resize-none border bg-transparent px-3 py-2 font-mono text-xs focus:outline-none"
              placeholder="Tell us about your project or ask any questions..."
            />
          </div>

          <button
            type="submit"
            className="bg-foreground text-background hover:bg-foreground/90 w-full px-4 py-2 font-mono text-xs font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
