import React, { ReactNode } from 'react';
import { NavigationEN } from './NavigationEN';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const LayoutEN: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <NavigationEN />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};