'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t('services'), href: '#services' },
    { label: t('method'), href: '#method' },
    { label: t('work'), href: '#work' },
    { label: t('about'), href: '#about' },
  ];

  return (
    <nav className="bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex h-16 items-center justify-between">
          <a href="#">
            <Logo />
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" asChild>
              <a href="#contact">{t('contact')}</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="bg-background border-b md:hidden">
          <div className="space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground block transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" className="w-full" asChild>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                {t('contact')}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
