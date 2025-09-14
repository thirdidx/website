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
import { ArrowRightIcon } from 'lucide-react';

/**
 * InquiryModal component provides a project inquiry form modal for service offerings
 * 
 * Features:
 * - Comprehensive project form with budget, timeline, and requirements
 * - Submits to /api/contact endpoint with type 'project'
 * - Form validation and error handling
 * - Resets form on successful submission
 * - Pre-fills project type and budget from props
 * - Configurable trigger button or custom children
 * 
 * @param title - Project type title (e.g., "web applications")
 * @param price - Price range for the service
 * @param description - Optional description for the modal
 * @param className - Optional CSS classes for styling
 * @param children - Custom trigger element (defaults to "inquire" button)
 */

interface InquiryModalProps {
  /** Project type title displayed in form */
  title: string;
  /** Price range for the service */
  price: string;
  /** Optional description text for the modal */
  description?: string;
  /** Optional CSS classes for the trigger element */
  className?: string;
  /** Custom trigger element - if not provided, uses default button */
  children?: React.ReactNode;
}

export default function InquiryModal({
  title,
  price,
  description,
  className = '',
  children,
}: InquiryModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: price,
    timeline: '',
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
          type: 'project',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: title,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.message,
        }),
      });

      if (response.ok) {
        setOpen(false);
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          project: '',
          budget: price,
          timeline: '',
          message: '',
        });
      } else {
        console.error('Failed to send inquiry');
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <button className="bg-foreground text-background hover:bg-foreground/90 pointer-events-auto inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-medium no-underline transition-colors">
            <ArrowRightIcon className="h-3 w-3" />
            inquire
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl">{title}</DialogTitle>
          <DialogDescription className="font-mono text-xs">
            {description || "tell us about your project and we'll get back to you within 24 hours."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-xs">
                name *
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
                email *
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
              company
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="border-foreground/20 focus:border-foreground w-full border bg-transparent px-3 py-2 font-mono text-xs focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="budget" className="mb-1 block font-mono text-xs">
                budget
              </label>
              <input
                id="budget"
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="border-foreground/20 focus:border-foreground w-full border bg-transparent px-3 py-2 font-mono text-xs focus:outline-none"
                placeholder={price}
              />
            </div>
            <div>
              <label htmlFor="timeline" className="mb-1 block font-mono text-xs">
                timeline
              </label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="border-foreground/20 focus:border-foreground w-full border bg-transparent px-3 py-2 font-mono text-xs focus:outline-none"
              >
                <option value="">select timeline</option>
                <option value="ASAP">asap</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="Flexible">flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block font-mono text-xs">
              project details *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-foreground/20 focus:border-foreground w-full resize-none border bg-transparent px-3 py-2 font-mono text-xs focus:outline-none"
              placeholder="tell us about your project, goals, and any specific requirements..."
            />
          </div>

          <button
            type="submit"
            className="bg-foreground text-background hover:bg-foreground/90 w-full px-4 py-2 font-mono text-xs font-medium transition-colors"
          >
            send inquiry
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
