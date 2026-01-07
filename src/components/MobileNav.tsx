import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(['about', 'experience', 'skills', 'projects', 'contact']);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('about')}
          className="text-foreground font-bold text-lg"
        >
          Adil P K
        </button>

        {/* Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground p-2 hover:bg-muted/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="px-6 pb-6 bg-background border-b border-border/50">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Mobile Resume Button - REMOVED */}
        </nav>
      )}
    </header>
  );
};

export default MobileNav;