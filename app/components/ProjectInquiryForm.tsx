'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProjectInquiryFormProps {
  variant?: 'default' | 'dialog';
}

export default function ProjectInquiryForm({ variant = 'default' }: ProjectInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    goals: '',
    techRequirements: '',
    audience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project inquiry submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isDialog = variant === 'dialog';
  const inputClasses = isDialog
    ? "w-full bg-transparent border-0 border-b border-blue-300/30 px-0 py-4 text-xl text-white placeholder:text-blue-200/60 focus:border-white focus:outline-none focus:ring-0 transition-colors"
    : "w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors";
  
  const selectClasses = isDialog
    ? "w-full bg-blue-600 border-0 border-b border-blue-300/30 px-0 py-4 text-xl text-white focus:border-white focus:outline-none focus:ring-0 transition-colors"
    : "w-full bg-background border-0 border-b border-border px-0 py-4 text-xl text-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors";
  
  const labelClasses = isDialog
    ? "block text-sm font-mono text-blue-200"
    : "block text-sm font-mono text-muted-foreground";
    
  const buttonClasses = isDialog
    ? "w-full bg-white text-blue-600 py-4 px-8 rounded-md text-lg font-medium hover:bg-blue-50 transition-colors"
    : "w-full bg-foreground text-background py-4 px-8 rounded-md text-lg font-medium hover:bg-foreground/90 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="col-span-12 md:col-span-10 md:col-start-2 space-y-12">
      {/* Basic Info */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-mono text-muted-foreground">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-mono text-muted-foreground">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-mono text-muted-foreground">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
          placeholder="Your company or startup"
        />
      </div>

      {/* Project Details */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-mono text-muted-foreground">
            Project Type
          </label>
          <Select
            value={formData.projectType}
            onValueChange={(value) => handleSelectChange('projectType', value)}
            required
          >
            <SelectTrigger className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground focus:border-foreground focus:ring-0 rounded-none">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border text-foreground">
              <SelectItem value="web-app" className="text-lg focus:bg-muted focus:text-foreground">Web Application</SelectItem>
              <SelectItem value="saas" className="text-lg focus:bg-muted focus:text-foreground">SaaS Platform</SelectItem>
              <SelectItem value="ecommerce" className="text-lg focus:bg-muted focus:text-foreground">E-commerce Site</SelectItem>
              <SelectItem value="marketing" className="text-lg focus:bg-muted focus:text-foreground">Marketing Website</SelectItem>
              <SelectItem value="mobile" className="text-lg focus:bg-muted focus:text-foreground">Mobile App</SelectItem>
              <SelectItem value="blockchain" className="text-lg focus:bg-muted focus:text-foreground">Web3/Blockchain</SelectItem>
              <SelectItem value="other" className="text-lg focus:bg-muted focus:text-foreground">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-mono text-muted-foreground">
            Budget Range
          </label>
          <Select
            value={formData.budget}
            onValueChange={(value) => handleSelectChange('budget', value)}
            required
          >
            <SelectTrigger className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground focus:border-foreground focus:ring-0 rounded-none">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border text-foreground">
              <SelectItem value="under-10k" className="text-lg focus:bg-muted focus:text-foreground">Under $10,000</SelectItem>
              <SelectItem value="10k-25k" className="text-lg focus:bg-muted focus:text-foreground">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-50k" className="text-lg focus:bg-muted focus:text-foreground">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k" className="text-lg focus:bg-muted focus:text-foreground">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k-plus" className="text-lg focus:bg-muted focus:text-foreground">$100,000+</SelectItem>
              <SelectItem value="equity" className="text-lg focus:bg-muted focus:text-foreground">Equity Partnership</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="timeline" className="block text-sm font-mono text-muted-foreground">
          Desired Timeline
        </label>
        <input
          type="text"
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
          placeholder="e.g., 3 months, ASAP, flexible"
        />
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-mono text-muted-foreground">
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 resize-none transition-colors"
          placeholder="Describe your project idea, features, and functionality..."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="goals" className="block text-sm font-mono text-muted-foreground">
          Business Goals
        </label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          rows={3}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 resize-none transition-colors"
          placeholder="What are you trying to achieve? Revenue goals, user acquisition, etc."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="audience" className="block text-sm font-mono text-muted-foreground">
          Target Audience
        </label>
        <input
          type="text"
          id="audience"
          name="audience"
          value={formData.audience}
          onChange={handleChange}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors"
          placeholder="Who will use this product?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="techRequirements" className="block text-sm font-mono text-muted-foreground">
          Technical Requirements (Optional)
        </label>
        <textarea
          id="techRequirements"
          name="techRequirements"
          value={formData.techRequirements}
          onChange={handleChange}
          rows={3}
          className="w-full bg-transparent border-0 border-b border-border px-0 py-4 text-xl text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0 resize-none transition-colors"
          placeholder="Any specific tech stack, integrations, or requirements..."
        />
      </div>

      <div className="pt-8">
        <button
          type="submit"
          className="w-full bg-foreground text-background py-4 px-8 rounded-md text-lg font-medium hover:bg-foreground/90 transition-colors"
        >
          Submit Project Inquiry
        </button>
      </div>
    </form>
  );
}