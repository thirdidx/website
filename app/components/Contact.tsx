'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import ProjectInquiryForm from './ProjectInquiryForm';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'contact' | 'project'>('contact');

  return (
    <section id="contact" className="flex min-h-screen items-center py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-sm leading-relaxed">
            Ready to start your project? Let's talk about what you're building.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center">
          <div className="border-border flex rounded-lg border p-1">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-8 py-3 rounded-md transition-all ${
                activeTab === 'contact'
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              General Contact
            </button>
            <button
              onClick={() => setActiveTab('project')}
              className={`px-8 py-3 rounded-md transition-all ${
                activeTab === 'project'
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Project Inquiry
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="mx-auto max-w-3xl">
          {activeTab === 'contact' && <ContactForm />}
          {activeTab === 'project' && <ProjectInquiryForm />}
        </div>
      </div>
    </section>
  );
}