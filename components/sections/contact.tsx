'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (formData.message.length < 50) {
      setStatus('error');
      setErrorMessage('Message must be at least 50 characters');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', companyName: '', phoneNumber: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    'w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 focus:outline-none';

  return (
    <section
      id="contact"
      className="bg-primary text-primary-foreground px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Build infrastructure, not one-off solutions.
          </h2>
          <p className="text-lg opacity-80">Start a strategy conversation with Broccoli Studios.</p>
        </div>

        {status === 'success' ? (
          <div className="bg-primary-foreground/10 rounded-lg p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold">Message sent!</h3>
            <p className="opacity-80">We&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="companyName"
                placeholder="Company name (optional)"
                value={formData.companyName}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number (optional)"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Tell us about your project... (min 50 characters) *"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
              <p className="mt-1 text-sm opacity-60">
                {formData.message.length}/50 characters minimum
              </p>
            </div>

            {status === 'error' && <p className="text-sm text-red-300">{errorMessage}</p>}

            <Button
              type="submit"
              size="lg"
              variant="secondary"
              className="group w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
